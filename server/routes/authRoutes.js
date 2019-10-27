const express = require('express');
const router = express.Router();

const passport = require('passport');
const FacebookStrategy = require('passport-facebook');

require('dotenv').config();

passport.use(new FacebookStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:8080/auth/callback',
}, (accessToken, refreshToken, profile, cb) => {
  console.log('accessToken', accessToken);
  return cb(null, profile);
}));

passport.serializeUser(function(profile, done) {
  return done(null, profile.id);
});

router.get('/', passport.authenticate('facebook'));

router.get('/error', (req, res) => {
  res.send('Error occured');
})

router.get('/callback', passport.authenticate('facebook', {
  successRedirect: '../',
  failureRedirect: '/error',
}));

module.exports = router;