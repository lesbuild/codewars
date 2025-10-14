function oppositeAttract(arr) {
    return arr.map((e,i)=>e+(arr.length-1-i)) 
}
// Description:

// Add an element opposite of their index

// 1st element add last index number, 2nd element add second to last index number and so forth...

// Every element is an integer.

// Example:

// oppositeAttract([1,1,1,1]) => [4,3,2,1]