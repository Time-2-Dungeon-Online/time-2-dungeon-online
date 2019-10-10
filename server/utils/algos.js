const Enemy = require('../model/Enemy');

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

// Helper function that generates a new enemy or boss
const generateRandomEnemy = (isBoss, diffSeed=null) => {
  const types = [
    'RED', 'BLUE', 'YELLOW', 'GREEN', 'PURPLE',
  ]

  const defeatConditions = {};
  if (diffSeed) { seed = seedGen(diffSeed); }

  let maxNumToKill = 4;
  if (isBoss) maxNumToKill = 10;
  let currentNumOfTypes = 0;

  let rand = randGen(seed(), seed(), seed(), seed());
  while (currentNumOfTypes < maxNumToKill) {
    let randNum = rand() % 5;
    if (!defeatConditions.hasOwnProperty(types[randNum])) { defeatConditions[types[randNum]] = 1; }
    else { defeatConditions[types[randNum]]++; }
    
    currentNumOfTypes++;
  }

  return new Enemy(defeatConditions, isBoss);

}

// Helper function that compares the cards used by the players against the current enemy
// Returns boolean checking if eneym is dead after cards have been thrown
const isEnemyDead = (cardsOnStage, enemy) => {
  const values = {
    'RED': 1,
    'REDx2': 2,
    'BLUE': 1,
    'BLUEx2': 2,
    'YELLOW': 1,
    'YELLOWx2': 2,
    'GREEN': 1,
    'GREENx2': 2,
    'PURPLE': 1,
    'PURPLEx2': 2,
    'INSTAKILL': 999,
  }
  const defeatConditions = enemy.defeatConditions;

  for (let i = 0; i < cardsOnStage.length; i++) {
    let card = cardsOnStage[i];
    if (card.cardType === 'INSTAKILL' && !enemy.isBoss) {
      return true;
    }

    let noX2;
    if (card.cardType.slice(-2) === 'x2') {
      noX2 = card.cardType.slice(0, card.cardType.length - 2);
    }
    if (defeatConditions.hasOwnProperty(noX2 || card.cardType)) {
      defeatConditions[noX2 || card.cardType] -= values[card.cardType];
    }
  }

  for (let condition of Object.keys(defeatConditions)) {
    if (defeatConditions[condition] > 0) return false;
  }
  return true;
};

// Function that makes a shuffled dungeon of size numCards
const makeShuffledDungeon = (numCards, diffSeed=null) => {
  const deck = [];
  
  if (diffSeed) { seed = seedGen(diffSeed); }
  let rand = randGen(seed(), seed(), seed(), seed());

  deck.push(generateRandomEnemy(true, rand().toString()));
  
  while (numCards) {
    rand = randGen(seed(), seed(), seed(), seed());
    deck.push(generateRandomEnemy(false, rand().toString()));
    numCards--;
  }

  return deck;
}

console.log(makeShuffledDungeon(20, 'asdgsdfg'));

module.exports = {
  makeShuffledDungeon,
  isEnemyDead,
}