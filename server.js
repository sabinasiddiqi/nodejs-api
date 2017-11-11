// dependencies
const express = require('express');

//wrapper around mongo
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('config');

// MongoDB connect to db master
if (config.util.getEnv('NODE_ENV') === 'test') {
  mongoose.connect('mongodb://localhost/test_db');
} else {
  process.env.NODE_ENV = 'dev'
  mongoose.connect('mongodb://localhost/bain_db');
}

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

// Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'))

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

// Start server
app.listen(3000);
console.log('API is running on port 3000');

module.exports = app
