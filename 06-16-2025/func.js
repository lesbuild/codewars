function arraySum(arr) {
  return arr.flat(Infinity).filter(item => !isNaN(parseFloat(item)) && isFinite(item)).reduce((a,b)=>a+b)
}