class Cube {
    constructor(side){
      this.setSide(side)
    }
    getSide() {
      return Math.abs(this.side); 
    }
    setSide(side = 0) {
      this.side = Math.abs(side);
    }
  }