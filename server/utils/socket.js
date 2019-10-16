const WebSocket = require('ws');
const type = require('./actions');
const state = require('../model/gameState');
const Player = require('../model/Player');
const algos = require('../utils/algos');

const { makeShuffledDungeon, attackEnemy } = algos;
const { gameStarted, players, isFull } = state;

module.exports = (port) => {
  const wss = new WebSocket.Server({ port: port }, () => {
    console.log('connected...')
  })
  wss.on('connection', (ws, req) => {
    console.log('connected!', req.url);
    // console.log('client list:', wss.clients);
    ws.on('message', (msg) => {
      msg = JSON.parse(msg);
      console.log('incoming message:', msg.type, msg.payload);
      switch (msg.type) {
        case type.CLIENT_TO_SERVER_JOIN_GAME: // for when a client first connects to the server
          console.log('this is where its atttt')
          if (state.gameStarted || state.isFull) {
            console.log('full');
            // TODO: Send an error message saying that the game has already begun
            ws.send(JSON.stringify({
              type: type.SERVER_TO_CLIENT_CANT_JOIN,
            }))
            break;
          }
          // Assign the player to the player list
          players[msg.payload] = new Player(msg.payload);
          // Check if the room is full after this new addition
          console.log(Object.keys(players).length);
          if (Object.keys(players).length === 5) state.isFull = true;
          // Send both the updated player list is assigned to to clients
          wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({
                type: type.SERVER_TO_CLIENT_JOIN_GAME,
                payload: players,
              }));
            }
          });
          break;
          
        case type.CLIENT_TO_SERVER_START_GAME:
          // Initialize the dungeon deck if it hasn't been done already
          state.dungeonDeck = makeShuffledDungeon(20, 'asdgsdfg');
          state.currentEnemy = state.dungeonDeck.pop();
          state.gameStarted = true;
          // Send the information needed to start a game to client
          wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              ws.send(JSON.stringify({
                type: type.SERVER_TO_CLIENT_START_GAME,
                payload: {
                  dungeonCardCount: state.dungeonCardCount,
                  currentEnemy: state.currentEnemy,
                }
              }));
            }
          });
          break;

        case type.CLIENT_TO_SERVER_USE_CARD:
          // Gets the card and name of the player from the payload
          const { card, playerName } = msg.payload;
          // Drop one card from that player
          players[playerName].updateCardCount(1, 'decrease');
          // Process the given card on the current enemy
          attackEnemy(card, state.currentEnemy);
          // check if the dungeon card's defeated
          if (!state.currentEnemy.alive) {
            // check if deck.length = 0
              // if so, game wins TODO: add logic for this
            // Then generate a new dungeon card via the one in algos.js
            state.currentEnemy = state.dungeonDeck.pop();
          }
          // Send updated enemy and player information
          wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({
                action: type.SERVER_TO_CLIENT_UPDATE_ENEMY_PLAYER,
                payload: {
                  currentEnemy: state.currentEnemy,
                  players,
                },
              }));
            }
          });
          break;
        case type.CLIENT_TO_SERVER_QUIT_GAME:
          // const playerName = msg.payload;
          // delete players[playerName];
          console.log('received')
          wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({
                type: 'test',
              }));
            }
          });          
          break;
        default:
          break;
      }
    })
  })
  return wss;
}