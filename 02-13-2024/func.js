function swap (string) {
    return string.replace(/[aioue]/g, v=>v.toUpperCase())
  }