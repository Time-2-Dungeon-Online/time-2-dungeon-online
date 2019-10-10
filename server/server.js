const express = require('express');
const app = express();
const db = require('./model/SQLConnection')
const path = require('path');

const PORT = 3000;

app.use(express.json());

app.get('/', )

//only serve static files if we are in production
if(process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.resolve(__dirname, '../')));
  //serve bundle from the dist folder
  app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
};

//start of the oauth
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

const FACEBOOK_APP_ID = '390263538580772';
const FACEBOOK_APP_SECRET = 'fbcdd606fa96d18342d93f3447ec7d0a';

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://www.example.com/auth/facebook/callback"
  },
  //this is where we will \
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate(..., function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
  }
));

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/secret',
                                      failureRedirect: '/' }));

// global error handler
app.use('*', (err, req, res) => {
  console.log('There was a route error, this is the global error handler in server.js')
});

app.listen(3000, () => console.log('listening on PORT: ' + PORT));

module.exports = app;
