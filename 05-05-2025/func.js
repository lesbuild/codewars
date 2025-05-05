function add() {
    let total = 0
    for(let i = 0;i<arguments.length;i++){
      arguments[i] *= i + 1
      total += arguments[i]
    }
    return total
  }