function moveTen(s){
    let alp = "abcdefghijklmnopqrstuvwxyz"
    let newS = ""
    for(let i =0;i<s.length;i++){
      let index = alp.indexOf(s[i]) + 10
      if(index > 25){
        index -= 26
      }
      newS += alp[index]
    }
    return newS
  }