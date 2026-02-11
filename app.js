// Import the ExpressJS package
const express = require("express");

// Create an instance of Express
const app = express();

// Set up any data needed to give to the server later
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import the router
const someRouterImported = require('./index');

// Tell the server to use the router,
// and specify a prefix for the router
app.use("/someFancyRouter", someRouterImported);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});