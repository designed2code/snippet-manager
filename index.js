const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Setup Express Server
app.listen(5000, (req, res) => {
  console.log(`Server Started on PORT 5000`);
});

app.get('/test', (req, res) => {
  res.send('Hello..');
});
