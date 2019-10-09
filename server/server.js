const express = require('express');
const app = express();
const db = require('./model/SQLConnection')
const path = require('path');

const PORT = 3000;

app.use(express.json());

//only serve static files if we are in production
if(process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.resolve(__dirname, '../')));
  //serve bundle from the dist folder
  app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
};


// global error handler
app.use('*', (err, req, res) => {
  console.log('There was a route error, this is the global error handler in server.js')
});

app.listen(3000, () => console.log('listening on PORT: ' + PORT));