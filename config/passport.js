const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../model/user');

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
    authorizationURL: process.env.authorizationURL,
    tokenURL: process.env.tokenURL,
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: `${process.env.APP_URL}auth/google/callback`,
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
