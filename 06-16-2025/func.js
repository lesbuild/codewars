function arraySum(arr) {
  return arr.flat(Infinity).filter(item => !isNaN(parseFloat(item)) && isFinite(item)).reduce((a,b)=>a+b)
}
// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.