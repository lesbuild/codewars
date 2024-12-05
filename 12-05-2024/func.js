function bingo(ticket, win){
    let miniWin = 0
    for(let i = 0;i<ticket.length;i++){
      for(let j = 0;j<ticket[i][0].length;j++){
        if(ticket[i][0].codePointAt(j) == ticket[i][1]){
          miniWin += 1;
          break;
        }
      }
    }
    return  miniWin >= win ? "Winner!" : "Loser!"
  }