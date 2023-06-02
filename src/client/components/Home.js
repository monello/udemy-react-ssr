import React from 'react';

const Home = () => {
    return (
        <div>
            <div>Home - Hello World</div>
            <button onClick={() => console.log("Hello")}>Say Hello</button>
        </div>
    );
};

export default Home;
