module.exports = class Player {

  constructor (playerName) {
    this.playerName = playerName;
    this.cardCount = 40;
    this.alive = true;
    this.currentHand = null;
  }

  updateCardCount (amount, instruction) {
    if (instruction === 'decrease') this.hp -= amount;
    if (instruction === 'increase') this.hp += amount;
    if (this.hp < 0) this.hp = 0;
  }
}