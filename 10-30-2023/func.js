function alternateCase(s) {
    let newString = ""
    for(let i =0;i<s.length;i++){
      if(s[i] === s[i].toLowerCase()){
        newString += s[i].toUpperCase()
      }
      else{
        newString += s[i].toLowerCase()
      }
    }
    return newString
  }