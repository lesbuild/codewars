function combine(arr1,arr2){
    return arr1.reduce((a,b)=>a*b,1) + arr2.reduce((c,d)=>c*d,1)
}

// Description:

// Get the product of each array and sum it.

// combine([1,2,3],3,4,5) => (66)