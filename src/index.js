import express from 'express';
import renderer from './helpers/renderer';

// create a new express app
const app = express();

// tells express to serve files from our public folder.
app.use(express.static('public'));

// create a root route
app.get('/', (req, res) => {
    const html = renderer(req);

    // We still send an HTML string back, but this time it will be the pre-rendered React component
    res.send(html);
});

// tell our express app to listen on port 3000
app.listen(3000, () => {
    console.log(`Listing on port 3000`);
});
