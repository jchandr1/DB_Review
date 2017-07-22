const express = require('express');
const parser = require('body-parser');

const app = express();
const db = require('./db/config');
const models = require('./db');
const router = require('./router');
const PORT = 3000;

app.use(parser.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error while connecting to the server ', error);
  } else {
    console.log('Successfully connected to the server at PORT', PORT);
  }
})
