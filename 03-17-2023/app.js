const rps = (p1, p2) => {
    const msgOne = "Player 1 won!"
    const msgTwo = "Player 2 won!"
    const msgThree = "Draw!"
    
  
    if((p1 == 'rock' && p2 == 'scissors') || (p1 == 'scissors' && p2 == 'paper') ||
       (p1 == 'paper' && p2 == 'rock')){
      return msgOne
    }
    else if((p1 == 'scissors' && p2 == 'rock') || (p1 == 'paper' && p2 == 'scissors') ||
           (p1 == 'rock' && p2 == 'paper')){
      return msgTwo
    }
    else if((p1 == 'scissors' && p2 == 'scissors') || (p1 == 'paper' && p2 == 'paper') ||
           (p1 == 'rock' && p2 == 'rock')){
      return msgThree
    }
  };