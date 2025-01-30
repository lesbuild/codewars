function mergeAndAlternate(arr1,arr2){
    result = []
  i = 0
  while (i < arr1.length || i < arr2.length){
    if (i < arr1.length){
        result.push(arr1[i])
    }
    if (i < arr2.length){
        result.push(arr2[i])
    }
    i++
  }
  return result
}