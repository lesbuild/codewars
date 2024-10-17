function cake(x, y){
    let total = 0
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0;i<y.length;i++){
      if(i % 2 == 0){
        total += y.charCodeAt(i)
      }
      else{
        total += alpha.search(y[i]) + 1
      }
    }
    return total / x <= .7 ? "That was close!" : "Fire!"
  }