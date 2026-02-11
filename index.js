// Import the ExpressJS package
const express = require('express');
// Create an instance of Express
const app = express();
// Set up any data needed to give to the server later
const port = 3000;

// Tell the server:
// - configure the server instance to respond to an additional route
// - the route will be a HTTP GET request on the homepage of the server (eg. localhost:3000/ ) 
app.get('/', (request, response) => {
    // The response object manages all things regarding what gets returned to the client.
    // In this case, we tell the response to send a message in HTML to the client.
    response.send('Hello World!');
});


// Once the server has been configured, tell it to start listening to web traffic.
app.listen(port, () => {
    // This logged message will appear in the terminal, not the browser.
    console.log(`Example app listening on port ${port}`);
});