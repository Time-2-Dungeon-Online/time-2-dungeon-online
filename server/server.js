const express = require('express');
const WebSocket = require('ws');
const app = express();
const wss = new WebSocket.Server({ port: 8000 }, () => {
  console.log('connected...')
})

// app.get('/', (req, res) => {
//   res.send('Coming soon...')
// });

app.listen(3000, () => {
  console.log('listening');
})

wss.on('connection', (ws, req) => {
  console.log('connected!', req.url);
  ws.on('message', (msg) => {
    console.log('incoming message:', msg);
  })
})