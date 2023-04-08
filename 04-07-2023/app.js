function digitize(n) {
    let str = n.toString().split('').reverse()
    return str.map(Number)
  }