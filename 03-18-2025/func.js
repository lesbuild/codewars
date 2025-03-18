function numPrimorial(n){
    let prim = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]
    return prim.slice(0,n).reduce((a,b)=>a*b,1)
  }