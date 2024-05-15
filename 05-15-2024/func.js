function lastDigit(n, d) {
    return d > 0 ? n.toString().split("").map(a=>parseInt(a)).slice(-d) : []
  }