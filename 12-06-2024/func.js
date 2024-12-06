function stringExpansion(s) {
    let m = 1
    let str = ""
    for(let i = 0;i<s.length;i++){
      if(/\d/g.test(s[i])){
        m = +s[i]
      }
      else{
        str += s[i].repeat(m)
      }
    }
    return str
  }