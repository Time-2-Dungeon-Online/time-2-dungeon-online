const WebSocket = require('ws');
const type = require('./actions');
const state = require('../model/gameState');
const Player = require('../model/Player');

module.exports = (port) => {
  const wss = new WebSocket.Server({ port: port }, () => {
    console.log('connected...')
  })
  wss.on('connection', (ws, req) => {
    console.log('connected!', req.url);
    ws.on('message', (msg) => {
      console.log('incoming message:', msg);
      switch (msg.action) {
        case type.CLIENT_TO_SERVER_JOIN_GAME: // for when a client first connects to the server
          const { gameStarted, players, isFull } = state;
          if (gameStarted || isFull) {
            // TODO: Send an error message saying that the game has already begun
            break;
          }
          // Assign the player to the player list
          players[msg.payload] = new Player(msg.payload);
          // Check if the room is full after this new addition
          if (Object.keys(players).length === 5) state.isFull = true;
          // Send both the player list and number user is assigned to to clients
          ws.send(JSON.stringify({
            action: type.SERVER_TO_CLIENT_JOIN_GAME,
            payload: players,
          }));
          break;
          
        case type.CLIENT_TO_SERVER_START_GAME:
          ws.send(JSON.stringify({
            action: type.SERVER_TO_CLIENT_START_GAME,
          }));
          break;

        case type.CLIENT_TO_SERVER_USE_CARD:
          const { card } = msg.payload;
          // where the card gets processed by the game logic

        default:
          break;
      }
    })
  })
  return wss;
}