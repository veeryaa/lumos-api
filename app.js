'use strict';

const express = require('express');
const cors = require('cors');
const db = require('./models/index').sequelize;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
  });
});

db.sync()
  .then((e) => {
    app.listen(1997, () => {
      console.log('Server is listening to port 1997.');
    });
    console.log('Database is synchronized.');
  })
  .catch((err) => console.log(err));
