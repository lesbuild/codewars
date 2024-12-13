function climb(n){
    let arr = [n]
    while(n > 1){
      arr.push(Math.floor(n/2))
      n = Math.floor(n/2)
    }
    return arr.reverse()
  }