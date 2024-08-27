function sumSquareEvenRootOdd(nums){
    return +nums.map(a=>a % 2 == 0 ? Math.pow(a,2) : Math.sqrt(a)).reduce((a,b)=>a+b).toFixed(2)
  }