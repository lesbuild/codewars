function compoundArray(a, b) {
  let combine = []
  let maxLength = Math.max(a.length,b.length)
  for(let i = 0;i<maxLength;i++){
    if(i < a.length){
      combine.push(a[i])
    }
    if(i < b.length){
      combine.push(b[i])
    }
  }
  return combine
}