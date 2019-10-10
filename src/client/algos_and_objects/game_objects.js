
// import { makeShuffledDeck } from './game_algos';
const { makeShuffledDeck } = require('./game_algos');


// Player Representation
function Player(playerName) {
  this.playerName = playerName;
  this.drawPile = makeShuffledDeck(playerName);
  this.currentHand = {};
  this.discardPile = [];
  this.alive = true;
}

// Card Representation
function Card(playerName, type, id) {
  this.id = id;
  this.cardType = type;
  this.highlighted = false;
  this.location = 'PLAYER_DECK';
  this.owner = playerName;
}

// PlayerDeck Representation
// function PlayerDeck(playerName) {
//   this.numCardsInDeck = 40;
//   this.owner = playerName;
//   this.deck = makeShuffledDeck(playerName);
// }

// Enemy Representation
function Enemy(howToKillObj, bossBool) {
  // this.numRed = 0;
  // this.numBlue = 0;
  // this.numYellow = 0;
  // this.numGreen = 0;
  // this.numPurple = 0;
  this.defeatConditions = howToKillObj;
  this.location = 'DUNGEON_DECK';
  this.isBoss = bossBool || false;
}


module.exports = {
  Player,
  Card,
  PlayerDeck,
  Enemy,
}