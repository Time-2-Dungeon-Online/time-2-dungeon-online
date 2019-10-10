// Enemy Representation
function Enemy(howToKillObj, bossBool) {
  this.defeatConditions = howToKillObj;
  this.location = 'DUNGEON_DECK';
  this.isBoss = bossBool || false;
}

module.exports = Enemy;