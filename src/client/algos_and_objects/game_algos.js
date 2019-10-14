
// import { Card } from './game_objects';
const { Card } = require('./game_objects');


// Creates a seed generator
const seedGen = (str) => {
  str = str.toString();
  let h = 1779033703;
  let i = 0
  for(i = 0, h ^= str.length; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
    h = h << 13 | h >>> 19;
  }
  return () => {
    h = Math.imul(h ^ h >>> 16, 2246822507);
    h = Math.imul(h ^ h >>> 13, 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
};

// Creates Random Number Generator
const randGen = (seed1, seed2, seed3, seed4) => {
  return () => {
    seed1 >>>= 0; seed2 >>>= 0; seed3 >>>= 0; seed4 >>>= 0; 
    let randNum = (seed1 + seed2) | 0;
    seed1 = seed2 ^ seed2 >>> 9;
    seed2 = seed3 + (seed3 << 3) | 0;
    seed3 = (seed3 << 21 | seed3 >>> 11);
    seed4 = seed4 + 1 | 0;
    randNum = randNum + seed4 | 0;
    seed3 = seed3 + randNum | 0;
    return Math.floor(((randNum >>> 0) / 4294967296) * 10000);
  };
};

let seed = seedGen('gotem');

// Function that makes a shuffled deck
const makeShuffledDeck = (playerName, diffSeed=null) => {
  const deck = [];
  const numCardTypes = {
    'HEAL': 4,
    'WILDCARD': 5,
    'RED': 4,
    'REDx2': 2,
    'BLUE': 4,
    'BLUEx2': 2,
    'YELLOW': 4,
    'YELLOWx2': 2,
    'GREEN': 4,
    'GREENx2': 2,
    'PURPLE': 4,
    'PURPLEx2': 2,
    'INSTAKILL': 1,
  };
  
  let keys = Object.keys(numCardTypes);
  if (diffSeed) { seed = seedGen(diffSeed); }

  while (keys.length) {
    let rand = randGen(seed(), seed(), seed(), seed());
    let idx = rand() % keys.length;
    deck.push(new Card(playerName, keys[idx], deck.length));
    numCardTypes[keys[idx]]--;
    if (!numCardTypes[keys[idx]]) {
      delete numCardTypes[keys[idx]];
      keys = Object.keys(numCardTypes);
    }
  } 
  
  return deck;
}

// console.log(makeShuffledDungeon(20, 'asdgsdfg'));
// console.log(isEnemyDead([new Card('','INSTAKILL', 1)], generateRandomEnemy(true)));
// console.log(makeShuffledDeck('minot', 'cert')[0]);
// console.log(makeShuffledDeck('hi', 'cert')[0]);
// console.log(makeShuffledDeck('meeeee', 'cert')[0]);




module.exports = {
  makeShuffledDeck,
}
