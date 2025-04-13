function isItLetter(character) {
  return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(character)
}

function isItLetter(character) {
  return /[a-zA-Z]/g.test(character)
}