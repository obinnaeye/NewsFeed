const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../model/user');
const configAuth = require('./auth');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use(new GoogleStrategy({
    authorizationURL: configAuth.googleAuth.authorizationURL,
    tokenURL: configAuth.googleAuth.tokenURL,
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL,
  },
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => {
      User.findOne({ 'google.id': profile.id }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (user) {
          return done(null, user);
        }
        const newUser = new User();

        newUser.google.id = profile.id;
        newUser.google.token = accessToken;
        newUser.google.displayName = profile.displayName;

        newUser.save((error) => {
          if (error) {
            throw error;
          }
        });
        return done(null, newUser);
      });
    });
  }));
};
