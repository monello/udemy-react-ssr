const express = require('express');

// create a new express app
const app = express();

// create a root route
app.get('/', (req, res) => {
    res.send("hello world");
});

// tell our express app to listen on port 3000
app.listen(3000, () => {
    console.log(`Listing on port 3000`);
});
