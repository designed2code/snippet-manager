const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
// Setup Express Server
app.listen(5000, (req, res) => {
  console.log(`Server Started on PORT 5000`);
});

// Set Up Router
app.use('/snippet', require('./routers/snippetRouter'));
