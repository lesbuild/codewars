function reduce(fraction){
    let result = []
    for (let i = fraction[0] ; i > 0 ; i--){
      if (fraction[0] % i == 0 && fraction[1] % i == 0)
      {
        result.push(fraction[0] / i)
        result.push(fraction[1] / i)
        return result
      }
    }
  }