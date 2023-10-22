function differenceOfSquares(n){
    let sqsum = 0
    let sumsq = 0
    for(let i=1;i <=n;i++){
      sqsum += i
      sumsq += i * i
    }
    return Math.pow(sqsum, 2) - sumsq
  }