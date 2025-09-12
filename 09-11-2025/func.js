function longestDistance(arr){
    return Math.max(...arr.map(a=>a < 12 ? a * 12 : a))
}
// Find the longest distance among the array of numbers 

// Most numbers are in inches but there are numbers in feet so 

// numbers that are smaller than a 12 are in feet so it needs to be converted



// Example:

// [26,23,13,4,8] => [ 26, 23, 13, 48, 96 ], (96)