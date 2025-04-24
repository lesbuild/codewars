function changer(str) { 
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let vowel = "aeiou"
    str = str.toLowerCase()
    let change = ""
    for(let i = 0;i<str.length;i++){
      let pos = alpha.indexOf(str[i])
      if(alpha.includes(str[i])){
        if(pos === 25){
          change += "A"
        }
        else if(vowel.includes(alpha[pos + 1])){
          change += alpha[pos + 1].toUpperCase()
        }
        else{
          change += alpha[pos + 1]
        }
      }
      else{
        change += str[i]
      }
    }
    return change
  }