function generatePairs(n) {
    let pair = []
    for(let i = 0;i<=n;i++){
      for(let j = i;j<=n;j++){
        pair.push([i,j])
      }
    }
    return pair
  }