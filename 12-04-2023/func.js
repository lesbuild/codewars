function stringTransformer(str) {
    let newStr = ""
    for(let i =0;i < str.length;i++){
      if(str[i] === str[i].toUpperCase()){
        newStr += str[i].toLowerCase()
      }
      else if(str[i] === str[i].toLowerCase()){
        newStr += str[i].toUpperCase()
      }
      else{
        newStr += str[i]
      }
    }
    return newStr.split(" ").reverse().join(" ")
  }