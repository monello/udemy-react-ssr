import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

// create a new express app
const app = express();

// The 2nd param here (the object) is only applicable to this course due to the way the lecturer set up
//  the auth server, just to make things simpler to explain in the course.
// We won't need to do this out in the wild
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));

// tells express to serve files from our public folder.
app.use(express.static('public'));

// create a root route
app.get('*', (req, res) => {
    // here we pass in the request object to our store because amongts many other things it contains the cookie
    const store = createStore(req);

    // Use matchRoutes to figure out which components are required for the current route
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    // Wait for all the promises in the list to resolve
    Promise.all(promises).then(() => {
        // Now we know we have all the data we will need

        // Finally we can send the HTML to the client side (browser)
        const html = renderer(req, store);

        // We still send an HTML string back, but this time it will be the pre-rendered React component
        res.send(html);
    });

});

// tell our express app to listen on port 3000
app.listen(3000, () => {
    console.log(`Listing on port 3000`);
});
