import express from 'express';

// imports to be able to render a React component
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

// create a new express app
const app = express();

// tells express to serve files from our public folder.
app.use(express.static('public'));

// create a root route
app.get('/', (req, res) => {
    // first we need to convert the React component to an HTML string.
    // ... this is where we use "renderToString()" instead of "render()" as we do in normal React apps
    const content = renderToString(<Home />);

    // create a mini-HTML document and interpolate our content and a script tag to load our client side bundle from the "static" folder we specified above
    const html = `
    <html>
        <head></head>
        <body>
            <div>${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `;

    // We still send an HTML string back, but this time it will be the pre-rendered React component
    res.send(html);
});

// tell our express app to listen on port 3000
app.listen(3000, () => {
    console.log(`Listing on port 3000`);
});
