function lonelyFirst(arr){
    for(let i = 1;i<arr.length;i++){
        arr.splice(i,1,arr[i] + arr[i-1])
    }
    return arr
}
// Description:

// upgrade every element of an array by adding element former to that element position

// Example:

// lonelyFirst([1,2]) => ([1,3])

// lonelyFirst([0,1,1,1]) => ([0,1,2,3])