function arr2bin(arr){
    return arr.every(a=>typeof a === "number" && a % 1 === 0) ? arr.reduce((a,b)=>a+b,0).toString(2) : false
  }