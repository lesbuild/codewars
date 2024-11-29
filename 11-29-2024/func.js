function pyramid(balls) {
    let row = 0;
    let ballsPerRow = 0;
    
    for(let x=0; x<balls; x++) {
      row++;
      ballsPerRow = ballsPerRow + row;
      if(ballsPerRow == balls) {
        return row;
      }
      if(balls < ballsPerRow) {
        return row - 1;
      }
    }
  }