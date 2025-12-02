function splitNum(arr1,arr2){
    let whole = arr1.concat(arr2)
    let odd = whole.filter(a=>a%2==1)
    let even = whole.filter(a=>a%2==0)
    return `Even numbers are ${even}\nOdd numbers are ${odd}`
}
// Description:

// Get odd and even numbers from both arrays

// Example:

// splitNum([1,2,3],[4,5,6]) = Even numbers are 2,4,6
//                             Odd numbers are 1,3,5