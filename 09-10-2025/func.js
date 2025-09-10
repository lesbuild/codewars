function xHitTheSpot(arr) {
    let pattern = arr[0][0];
    return arr.flat().filter((a,i)=>i%2==0).every(a=>a=="x")
}
// Given an array of 3 array that looks like a 3 x 3 board, 
// check if there is a "x" pattern across the board with the same data type of number or String

// Example:

// [[1,2,1],[0,1,3],[1,6,1]] => true
// [[3,2,1],[0,1,3],[1,6,1]] => false
// [["a",1,"a"],["b","a",3],["a",6,"a"]] => true