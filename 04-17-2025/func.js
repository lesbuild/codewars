function generatePairs(m, n) {
    let sorted = []
    for(m;m<=n;m++){
      for(let i = m;i<=n;i++){
        sorted.push([m,i])
      }
    }
    return sorted
  }