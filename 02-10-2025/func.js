function singleDigit(n) {
    while(n > 9){
      n = n.toString(2).split("").reduce((a,b)=>Number(a)+Number(b), 0)
    }
    return n
  }