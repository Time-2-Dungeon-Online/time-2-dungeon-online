const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Coming soon...')
});

// app.get('/api', (req, res) => {
//   res.send('Working? Plz')
// })

app.listen(3000, () => {
  console.log('listening');
})