/* eslint-disable no-console */

import express from 'express';

import constants from './config/constants';
import './config/database';
import middlewaresConfig from './config/middlewares';

const app = express();

middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
      Server is up on port ${constants.PORT} 🐳
      ---
      Running on ${process.env.NODE_ENV} ☎️
      ---
      Make something great 💡
    `);
  }
});
