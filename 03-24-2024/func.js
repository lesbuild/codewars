function arithmeticSequenceElements(a, d, n) {
    let temp = a
    let num = []
    for(let i = 0;i<n;i++){
      num[i] = temp 
      temp += d
    }
    return num.join(", ")
  }