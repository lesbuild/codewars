function squares(x, n) {
    let powArr = []
    while(n > 0){
      powArr.push(x)
      x *= x
      n--
    }
    return powArr
  }