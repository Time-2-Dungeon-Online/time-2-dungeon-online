// const express = require('express');
// const app = require('../server.js');
// const authRouter = express.Router();
// const authController = require('../controllers/authController.js');
// const cors = require('cors');

// app.use(cors());

// app.use(passport.initialize());
// app.use(passport.session());

// var passport = require('passport')
//   , FacebookStrategy = require('passport-facebook').Strategy;

// const FACEBOOK_APP_SECRET = 'fbcdd606fa96d18342d93f3447ec7d0a'
// const FACEBOOK_APP_ID = '390263538580772'

// passport.use(new FacebookStrategy({
//     clientID: FACEBOOK_APP_ID,
//     clientSecret: FACEBOOK_APP_SECRET,
//     callbackURL: "http://www.example.com/auth/facebook/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     // User.findOrCreate(..., function(err, user) {
//     //   if (err) { return done(err); }
//     //   done(null, user);
//     // });
//   }
// ));


// // Redirect the user to Facebook for authentication.  When complete,
// // Facebook will redirect the user back to the application at
// //     /auth/facebook/callback
// authRouter.get('/facebook', passport.authenticate('facebook'));

// // Facebook will redirect the user to this URL after approval.  Finish the
// // authentication process by attempting to obtain an access token.  If
// // access was granted, the user will be logged in.  Otherwise,
// // authentication has failed.
// authRouter.get('/facebook/callback',
//   passport.authenticate('facebook', { successRedirect: '/',
//                                       failureRedirect: '/auth' }));



// // Passport session setup.
// //   To support persistent login sessions, Passport needs to be able to
// //   serialize users into and deserialize users out of the session.  Typically,
// //   this will be as simple as storing the user ID when serializing, and finding
// //   the user by ID when deserializing.  However, since this example does not
// //   have a database of user records, the complete GitHub profile is serialized
// //   and deserialized.

// // passport.serializeUser(function(user, cb) {
// //   cb(null, user);
// // });

// // passport.deserializeUser(function(obj, cb) {
// //   cb(null, obj);
// // });

// module.exports = authRouter;