const express = require('express');
const https = require('https');

const app = express();

const socket = require('./utils/socket');
const db = require('./model/SQLConnection')
const path = require('path');
const fs = require('fs');

const passport = require('passport');

const authRoutes = require('./routes/authRoutes');

const PORT = 3000;

app.use(express.json());
app.use(passport.initialize());

// Establish the WebSocket server
socket(8000);
// console.log(socket);

// only serve static files if we are in production
if(process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
  });
  //serve bundle from the dist folder
  app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
};

// Routes
app.use('/auth', authRoutes);

// // global error handler
// app.use('*', (err, req, res) => {
//   console.log('There was a route error, this is the global error handler in server.js')
// });

app.listen(3000, () => console.log('listening on PORT: ' + PORT));

// const server = https.createServer({
//   key: fs.readFileSync(path.resolve(__dirname, './key.pem')),
//   cert: fs.readFileSync(path.resolve(__dirname, './cert.pem')),
//   passphrase: 'dungeon',
// }, app).listen(3000);

module.exports = app;
