function f(n){
    let total = 0
    if(typeof n === "number" && n > 0 && Number.isInteger(n)){
       for(let i =1;i<=n;i++){
      total += i
    }
      return total
    }else{
      return false
    }
  }