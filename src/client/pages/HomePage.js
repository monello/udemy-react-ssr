import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div>HomePage - Hello World!</div>
            <button onClick={() => console.log("Hello World")}>Say Hello World</button>
        </div>
    );
};

export default {
    component: HomePage
};
