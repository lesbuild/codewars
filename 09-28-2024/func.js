function scoreboard(string) {
    let arr = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let arrString = string.split(" ").slice(-2)
  
    return arrString.map(a=>arr.indexOf(a))
  }