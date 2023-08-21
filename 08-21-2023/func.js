function seven(m) {
    let count = 0
    while(m.toString().split("").length > 2){
      let x = m.toString().split("").map(a=>parseInt(a)).slice(0,-1).join("")
      let y = m.toString().split("").map(a=>parseInt(a)).slice(-1)
      m = x - (2 * y)
      count++
      }
    return [m,count]
  }