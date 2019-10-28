
// import { makeShuffledDeck } from './game_algos';
const { makeShuffledDeck } = require('./game_algos');


// Player Representation
// function Player(playerName) {
//   this.playerName = playerName;
//   this.drawPile = makeShuffledDeck(playerName);
//   this.currentHand = {};
//   this.discardPile = [];
//   this.alive = true;
// }

// Card Representation
function Card(playerName, type, key) {
  this.key = key;
  this.cardType = type;
  this.highlighted = false;
  this.location = 'PLAYER_DECK';
  this.owner = playerName;
}

module.exports = {
  Card,
  // PlayerDeck,
}