const express = require('express');
const app = express();
const db = require('./model/SQLConnection')
const path = require('path');

const PORT = 3000;

app.use(express.json());

app.use('/', express.static(path.resolve(__dirname, '../')));
''
// //serve things inside of the build file
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));


//only serve static files 
// if(process.env.NODE_ENV === 'production') {
//   console.log('we are in production');
// };

//global error handler
// app.use('*', (err, req, res) => {
//   console.log('There was a route error, this is the global error handler in server.js')
// });

app.listen(3000, () => console.log('listening on PORT: ' + PORT));