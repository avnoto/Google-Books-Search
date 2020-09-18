const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => handleError(error));

mongoose.connection.on('connected', function () {
  console.log('Connected to mongodb');
});
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
// Add routes, both API and view

app.use(routes);
