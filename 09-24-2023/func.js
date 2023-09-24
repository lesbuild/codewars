function vowel2index(str) {
    let newStr= ""
     for(let i = 0;i <str.length;i++){
       if(str[i].match(/[aeiou]/i)){
         newStr += (i + 1).toString()
       }
       else{
         newStr += str[i]
       }
       
     }
    return newStr
  }