function capitalize(s){
    let newSet = ""
    let newSet2 = ""
    let newArr =[]
    for(let i =0;i<s.length;i++){
      if(i % 2 == 0 || i == 0){
        newSet += s[i].toUpperCase()
        newSet2 += s[i]
      }
      else{
        newSet += s[i]
        newSet2 += s[i].toUpperCase()
      }
    }
    newArr.push(newSet, newSet2)
    return newArr
  };