function combineArray(arr1,arr2){
    return arr1.reduce((a,b)=>a+b,0) * arr2.reduce((c,d)=>c+d,0)
}
// Description:

// Add element of each array then multiple both array

// Example:

// combineArray([1,2,3],[3,2,1]) => ([6],[6]) => (36)