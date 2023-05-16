function findShort(s){
    let arr = s.split(" ")
    return arr.reduce((a, b) => a.length <= b.length ? a : b).length
  }