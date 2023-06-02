const express = require('express');

// imports to be able to render a React component
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

// create a new express app
const app = express();

// create a root route
app.get('/', (req, res) => {
    // first we need to convert the React component to an HTML string.
    // ... this is where we use "renderToString()" instead of "render()" as we do in normal React apps
    const content = renderToString(<Home />);
    // We still send an HTML string back, but this time it will be the pre-rendered React component
    res.send(content);
});

// tell our express app to listen on port 3000
app.listen(3000, () => {
    console.log(`Listing on port 3000`);
});
