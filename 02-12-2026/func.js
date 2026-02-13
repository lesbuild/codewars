function meansToEnd(arr){
    let p = arr.length/2
    return Math.round(arr.sort((a,b)=>a-b).slice(arr.length/2).reduce((c,d)=>c+d) /p)
}
// Description:

// Get the mean of the last half of the largest numbers of the array.

// Example:

// meansToEnd([1,6,8,9,3,2]) => 8