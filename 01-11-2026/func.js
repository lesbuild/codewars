function sumArray(arr){
    return arr.flat(Infinity).reduce((a,b)=>a+b,0)
}
// Description: 

// Sum up the Arrays, All of the examples are nested Arrays

// Example:

// sumArray([1,2,[3,4,[5]]])=> 15