function powerOfTwo(arr1,arr2){
    return arr1.concat(arr2).filter(a=>typeof a == "number").reduce((b,c)=>b+c,0)
}
// Combine two arrays to make a single array and add all the numbers