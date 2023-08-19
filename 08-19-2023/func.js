function points(games) {
    let totalPts = 0
    for(let i = 0;i<games.length;i++){
      let newArr = games[i].split(":")
      if(newArr[0] > newArr[1]){
        totalPts += 3
      }
      else if(newArr[0] === newArr[1]){
        totalPts += 1
      }
    }
    return totalPts
  }