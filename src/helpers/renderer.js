import React from "react";
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";

export default (req) => {
    // first we need to convert the React component to an HTML string.
    // ... this is where we use "renderToString()" instead of "render()" as we do in normal React apps
    const content = renderToString(
        // the context prop is required. We are not using it yet but it my=ust be set, so for now it is set to an empty object
        <StaticRouter location={req.path} context={{}}>
            <Routes />
        </StaticRouter>
    );

    // create a mini-HTML document and interpolate our content and a script tag to load our client side bundle from the "static" folder we specified above
    return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `;
};
