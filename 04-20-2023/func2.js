function longest(s1, s2) {
    let uniqueChars = [...new Set(s1 + s2)].sort()
    return uniqueChars.join('')
  }