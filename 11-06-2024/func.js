function myParseInt(str) {
    return str.trim().match(/\D/g) ? "NaN" : +str
  }