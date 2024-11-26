function dropCap(n) {
    let word = n.split(" ").map(a=>a.trim())
    for(let i = 0;i<word.length;i++){
      if(word[i].length > 2){
        word[i] = word[i][0].toUpperCase() + word[i].substring(1).toLowerCase()
      }
    }
    return word.join(" ")
  }