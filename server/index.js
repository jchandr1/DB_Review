// Good idea to consolidate your module imports from your direct imports
const express = require('express');
const parser = require('body-parser');

const app = express();

// Used to initialize a connection to the db
const db = require('./db/config');

// Used to instantiate the tables in the db
const models = require('./db');

// Used to utilize the routes (endpoints and controllers)
const router = require('./router');

// IP Port you want to hit
const PORT = 3000;

app.use(parser.urlencoded({ extended: true }));

// Telling the server to use the router import on anything with an enpoint /api
app.use('/api', router);

// Telling express to listen in on the designated PORT
app.listen(PORT, (err) => {
  if (err) {
    console.log('Error while connecting to the server ', error);
  } else {
    console.log('Successfully connected to the server at PORT', PORT);
  }
})
