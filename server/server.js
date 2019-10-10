const express = require("express");
const app = express();
const passport = require("passport")
const FacebookStrategy = require("passport-facebook").Strategy;
const pool = require('./model/SQLConnection');
const auth = require('./config/auth');
// const path = require("path");

// const strategy = ('./config/passport');

const PORT = 3000;

// //only serve static files if we are in production
// if (process.env.NODE_ENV === "production") {
//   app.use("/", express.static(path.resolve(__dirname, "../")));
//   //serve bundle from the dist folder
//   app.use("/dist", express.static(path.resolve(__dirname, "../dist")));
// }

app.use(express.json());
passport.initialize();

passport.use(new FacebookStrategy({
    clientID: auth.clientID,
    clientSecret: auth.clientSecret,
    callbackURL: auth.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    const { email } = profile.email
    const values = [accessToken, refreshToken, profile];
    const query =
      "INSERT VALUES ($1, $2, $3) INTO users(accessToken, refreshToken, email)";
    pool
      .query(query, values)
      .then(response => done(null, response.rows[0]))
      .catch(err => console.log(err));
}));

app.get("/");
app.get('/secret', (req, res) => {
  res.send('SECRET!!!!!');
});


// Redirect the user to Facebook for authentication.  When complete, Facebook will redirect the user back to the application.
app.get('/auth/facebook', passport.authenticate('facebook',{scope:'email'}));

// Facebook will redirect the user to this URL after approval.  Finish the authentication process by attempting to obtain an access token.
// If access was granted, the user will be logged in.  Otherwise, authentication has failed.
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect : '/secret', failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/secret');
  });


// global error handler
app.use("*", (err, req, res) => {
  console.log(
    "There was a route error, this is the global error handler in server.js"
  );
});

app.listen(3000, () => console.log("listening on PORT: " + PORT));

module.exports = app;
