/* eslint-disable no-console */

import mongoose from 'mongoose';

import constants from './constants';

//  Remove the warning with Promise
mongoose.Promise = global.Promise;

// Connect the db with the url provide
try {
  mongoose.connect(constants.MONGO_URL, {
    useMongoClient: true,
  });
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL, {
    useMongoClient: true,
  });
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running 🍻'))
  .on('error', e => {
    throw e;
  });
