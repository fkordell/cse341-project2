require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use('/', require('./routes'));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({message: 'Internal Server Error'});
});

const db = require('./models');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port, () => console.log(`Server running and connected to DB on port ${port}`));
  })
  .catch(err => {
    console.error('Database connection failed', err);
    process.exit(1); 
  });