function findOdd(A) {
    const occ = A.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {})
    for(const key in occ){
      if(occ[key] % 2 != 0){
        return parseInt(key)
      }
    }
  }