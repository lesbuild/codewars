function convertHashToArray(hash){
    let arr = []
    for (const [key, value] of Object.entries(hash)) {
    arr.push([key,value])}
    return arr
  }