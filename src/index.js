import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

// create a new express app
const app = express();

// tells express to serve files from our public folder.
app.use(express.static('public'));

// create a root route
app.get('*', (req, res) => {
    const store = createStore();

    // Use matchRoutes to figure out which components are required for the current route
    matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData() : null;
    });


    const html = renderer(req, store);

    // We still send an HTML string back, but this time it will be the pre-rendered React component
    res.send(html);
});

// tell our express app to listen on port 3000
app.listen(3000, () => {
    console.log(`Listing on port 3000`);
});
