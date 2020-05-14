require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(cors());

// import posts
const ideas = require('./routes/api/ideas');

// db mongo
const db = require('./config/keys').mongoURI;

// conect to db
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('database is connected'))
  .catch((err) => console.log(err));

// use routes
app.use('/', ideas);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));
