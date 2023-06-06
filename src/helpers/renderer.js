import React from "react";
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import Routes from "../client/Routes";

export default (req, store) => {
    // first we need to convert the React component to an HTML string.
    // ... this is where we use "renderToString()" instead of "render()" as we do in normal React apps
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    // create a mini-HTML document and interpolate our content and a script tag to load our client side bundle from the "static" folder we specified above
    return `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script>
            window.INITIAL_STATE = ${JSON.stringify(store.getState())}
            </script>
            <script src="bundle.js"></script>
        </body>
    </html>
    `;
};
