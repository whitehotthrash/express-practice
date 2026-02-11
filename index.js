// Import the ExpressJS package
const express = require('express');
// Create an instance of Express
const app = express();
// Set up any data needed to give to the server later
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Tell the server:
// - configure the server instance to respond to an additional route
// - the route will be a HTTP GET request on the homepage of the server (eg. localhost:3000/ ) 
app.get('/', (request, response) => {
    // The response object manages all things regarding what gets returned to the client.
    // In this case, we tell the response to send a message in HTML to the client.
    response.send('Hello World!');
});

function messageWithVerb(request, response) {
    response.send(`Received a request with the ${request.method} HTTP verb!`);
}

app.get('/', messageWithVerb(request, response));
// POST route on localhost:3000/mirror
// with JSON body content containing a "message" variable
app.post('/mirror', (request, response) => {
    // Any submitted JSON keys will be on "body"
    // Access them with object syntax:
    let message = request.body.message;

    // Something fun to show that we can work with
    // the submitted JSON data:
    message = message.split("").reverse().join("");

    // Send back a response to the client:
    response.json({
        egassem: message
    });
});
app.put('/', messageWithVerb(request, response));
app.patch('/', messageWithVerb(request, response));
app.delete('/', messageWithVerb(request, response));

// Immediately-invoked callback style
app.get('/', (request, response) => {
    response.send('Hello world!');
});


// Once the server has been configured, tell it to start listening to web traffic.
app.listen(port, () => {
    // This logged message will appear in the terminal, not the browser.
    console.log(`Example app listening on port ${port}`);
});