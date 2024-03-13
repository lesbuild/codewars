function shorterReverseLonger(a,b){
    let aLen = a.length
    let bLen = b.length
    if(aLen < bLen){
      return a + b.split("").reverse().join("") + a
    }
    else{
      return b + a.split("").reverse().join("") + b
    }
  }