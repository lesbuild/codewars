function nameInStr(str, name){
    name = name.toLowerCase()
    str = str.toLowerCase()
    
    let charLen = 0
    
    for (let char of str) {
      if (char === name[charLen])
        charLen++
    }
    return charLen === name.length
  }