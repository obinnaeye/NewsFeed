'use strict';

const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../model/user');
const configAuth = require('./auth');

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
      done(null, user.id);
    });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
    
  passport.use(new googleStrategy({
    authorizationURL: configAuth.googleAuth.authorizationURL,
    tokenURL: configAuth.googleAuth.tokenURL,
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      User.findOne({ 'google.id': profile.id }, function (err, user) {
        if (err) {
            return done(err);
        }

        if (user) {
            return done(null, user);
        } else {
            var newUser = new User();

            newUser.google.id = profile.id;
            newUser.google.token = accessToken;
            newUser.google.displayName = profile.displayName;
            
            newUser.save(function (err) {
                if (err) {
                    throw err;
                }
                
            });
            return done(null, newUser);
        }
      });
    });
  }));
};