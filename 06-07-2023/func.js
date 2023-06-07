const binaryArrayToNumber = arr => {
    let multiplier = Math.pow(2, arr.length - 1)
    let total = 0
    for(let i =0;i <arr.length;i++){
      total += multiplier * arr[i]
      multiplier = multiplier / 2
    }
    return total
  };