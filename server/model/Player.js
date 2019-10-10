module.exports = class Player {
  constructor (id) {
    this.id = id;
    this.hp = 50;
    this.latestCard = null;
  }
  updateHP (amount, instruction) {
    if (instruction === 'decrease') this.hp -= amount;
    if (instruction === 'increase') this.hp += amount;
    if (this.hp < 0) this.hp = 0;
  }
  updateCard (card) {
    this.latestCard = card;
  }
}