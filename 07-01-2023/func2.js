function positiveSum(arr) {
    let newArr = arr.filter(a=>a > 0)
    return newArr.length > 0 ? newArr.reduce((a,b)=>a + b) : 0
  }