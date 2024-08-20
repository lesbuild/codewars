function dative(word) {
    for(let i = word.length;i>=0;i--){
      if("eéiíöőüű".includes(word[i])){
        return word + "nek"
      }
      else if("aáoóuú".includes(word[i])){
        return word + "nak"
      }
    }
}