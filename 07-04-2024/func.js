function sumSquares(array) {
    var sqTotal = []
    for(let i =0;i<array.length;i++){
      sqTotal.push(array[i]**2)
    }
    return sqTotal.reduce((a,b)=>a+b)
  }