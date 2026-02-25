function bigSum(arr1,arr2){
    return arr1.reduce((a,b)=>a+b) + arr2.reduce((c,d)=>c+d)
}
// Description: 

// We need to tally the array and combine to see our expenses

// bigSum([1,2,3],[2,3,4]) => 15