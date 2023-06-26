function defineSuit(card) {
    // good luck
    let suits = {"♠" : "spades", "♣" : "clubs", "♦" : "diamonds", "♥" : "hearts"
    }
    return suits[card.match(/[♠♣♦♥]/g)]
  }