const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Coming soon...')
});


app.listen(3000, () => {
  console.log('listening');
});

module.exports = app;
