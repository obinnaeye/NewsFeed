'use strict';
require('dotenv').load();
module.exports = {
    'googleAuth': {
        'authorizationURL' :process.env.authorizationURL,
        'tokenURL': process.env.tokenURL,
        'clientID': process.env.GOOGLE_ID,
        'clientSecret': process.env.GOOGLE_SECRET,
        'callbackURL': process.env.APP_URL + 'auth/google/callback'
    }
};