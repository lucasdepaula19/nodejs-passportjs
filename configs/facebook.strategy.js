const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  clientID: '321916411808431',
  clientSecret: 'chave',
  callbackURL: "http://localhost:3000/auth/facebook/callback"
  //enableProof: true
},
  function(accessToken, refreshToken, profile, cb) {
    //User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(undefined, profile);
    //});
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});