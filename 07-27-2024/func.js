function getLargerNumbers(a, b) {
    let c = []
    for(let i = 0;i<a.length;i++){
      if(a[i] >= b[i]){
        c.push(a[i])
      }
      else{
        c.push(b[i])
      }
    }
    return c
  }