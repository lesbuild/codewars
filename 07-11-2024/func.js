function neutralise(s1, s2) {
    let arr1 = s1.split("")
    let arr2 = s2.split("")
    return arr1.map((e,i)=> {return e === arr2[i] ? e : 0}).join("")
  }