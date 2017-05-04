'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
    google: {
        id: String,
        displayName: String,
        token: String
    }
});

module.exports = mongoose.model('User', User);