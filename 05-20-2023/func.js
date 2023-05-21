function mergeArrays(arr1, arr2) {
    let combArr =  arr1.concat(arr2)
    let uniqueArr= combArr.filter((c, index) => {
    return combArr.indexOf(c) === index;
});
  return uniqueArr.sort((a,b)=>a - b)
}