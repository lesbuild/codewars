function geometricSequenceElements(a, r, n){
    let arr = new Array
    let f = a
    for(let i = 0;i <n;i++){
      arr.push(f)
      f *= r
    }
    return arr.join(", ")
  }