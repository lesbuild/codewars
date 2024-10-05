function encode(str) {
    return str.replace(/[a-z]/gi, c => c.charCodeAt() - (c < "a" ? 64 : 96))
  }