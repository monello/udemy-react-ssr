import React from 'react';

// The context object that we pass in here from the renderer via the StaticContext component gets renamed and passed to components as "staticContext"
// We need to default this to an empty object because it will only exist if this component is called to the server and not from the browser
const NotFoundPage = ({ staticContext = {} }) => {
    // We can choose whatever we want to name the notFound property. "notFound" just makes sense
    // Now this property will be available and set to "true" when this component is executed
    // So we know that is this "notFound" prop exists and is truthy we can set the request status to "404"S
    staticContext.notFound = true;

    return (
        <div><h1>404: Page Not Found</h1></div>
    );
};

export default {
    component: NotFoundPage
};
