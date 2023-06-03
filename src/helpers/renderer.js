import React from "react";
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

export default () => {
    // first we need to convert the React component to an HTML string.
    // ... this is where we use "renderToString()" instead of "render()" as we do in normal React apps
    const content = renderToString(<Home />);

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
