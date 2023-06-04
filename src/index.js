import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

// create a new express app
const app = express();

// tells express to serve files from our public folder.
app.use(express.static('public'));

// create a root route
app.get('*', (req, res) => {
    const store = createStore();

    // Some logic to initialize
    // and load data into the store

    const html = renderer(req, store);

    // We still send an HTML string back, but this time it will be the pre-rendered React component
    res.send(html);
});

// tell our express app to listen on port 3000
app.listen(3000, () => {
    console.log(`Listing on port 3000`);
});
