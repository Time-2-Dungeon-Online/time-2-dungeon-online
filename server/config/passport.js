const FacebookStrategy = require("passport-facebook").Strategy;
const auth = require('./auth');

module.exports = new FacebookStrategy({
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
});
