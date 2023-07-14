function getNumberFromString(s) {
    return Number(s.match(/[0123456789]/g).join(""))
  }