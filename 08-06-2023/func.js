function sumMul(n,m){

    if(n >= m) return "INVALID";
    let total = 0
    for(let i=n;i <m;i+=n){
        total += i
      }
      return total
    
  }
  