function followIdx(arr) {
    return arr.map((e,i,a)=>a.indexOf(i+1))
}

// Description:

// Make an array of index according to their elements ascending order of numbers.

// This will be array of numbers from 0 < n < 10

// Example: 

// followIdx([4,3,2,1])=>[ 3, 2, 1, 0 ]