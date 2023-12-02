function newAvg(arr, newavg) {
    if(arr != ""){
      let nextNum = newavg * (arr.length + 1) - arr.reduce((a,b)=>a+b)
      if(nextNum > 0){
        return Math.ceil(nextNum)
      }
    else{
      throw "Expected New Average is too low"
    }}
    else{
      return newavg
    }
  }