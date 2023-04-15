function isPangram(string){
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    return alphabet.every(letter => string.toLowerCase().includes(letter))
  }