const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
  google: {
    id: String,
    displayName: String,
    token: String,
  },
});

module.exports = mongoose.model('User', user);
