function arrayMash (array1, array2) {
  let combine = []
  for(let i = 0;i<array1.length;i++){
    combine.push(array1[i],array2[i])
  }
  return combine
}