const express = require("express");
const app = express();
const db = require("./model/SQLConnection");
const path = require("path");
const passport = require("passport")
const facebookStrategy = ('./config/passport');

const PORT = 3000;

// //only serve static files if we are in production
// if (process.env.NODE_ENV === "production") {
//   app.use("/", express.static(path.resolve(__dirname, "../")));
//   //serve bundle from the dist folder
//   app.use("/dist", express.static(path.resolve(__dirname, "../dist")));
// }

app.use(express.json());
app.get("/");
app.get('/secret', (req, res) => {
  res.send('../secret.html');
});


// Redirect the user to Facebook for authentication.  When complete, Facebook will redirect the user back to the application.
app.get("/auth/facebook", passport.authenticate("facebook", {scope: ['email']}));

// Facebook will redirect the user to this URL after approval.  Finish the authentication process by attempting to obtain an access token.
// If access was granted, the user will be logged in.  Otherwise, authentication has failed.
app.get(
  "/auth/facebook/secret",
  passport.authenticate("facebook", {
    successRedirect: "/secret",
    failureRedirect: "/"
  })
);

// global error handler
app.use("*", (err, req, res) => {
  console.log(
    "There was a route error, this is the global error handler in server.js"
  );
});

app.listen(3000, () => console.log("listening on PORT: " + PORT));

module.exports = app;
