class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if (!this.lives) throw 'no life, Game over';
      if (n === this.number) return true;
      this.lives--;
      return false;
    }
  }