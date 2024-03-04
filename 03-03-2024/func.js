function isLucky(n) {
    let sum = n.toString().split("").map(a=>parseInt(a)).reduce((a,b)=>a+b)
    return sum == 0 || sum % 9 == 0
  }