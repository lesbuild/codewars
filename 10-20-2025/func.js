function addOppositeIndex(arr){
    return arr.reverse().map((e,i)=>e+i).reverse()
}
// Given an Array, add the opposite index of an element. First element must add the last number index,

// second element to second to last index number and so on.

// Example:

// addOppositeIndex([3,2,1]) => [ 5, 3, 1 ]

// addOppositeIndex([1,2,3]) => [ 3, 3, 3 ]