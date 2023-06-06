import React from 'react';

const Home = () => {
    return (
        <div>
            <div>Home - Hello World!</div>
            <button onClick={() => console.log("Hello World")}>Say Hello World</button>
        </div>
    );
};

export default Home;
