function isIntArray(arr) {
    if(arr == null || arr === ""){
      return false
    }
    else{
      let count = 0
    for(let i = 0;i<arr.length;i++){
      if(Number.isInteger(arr[i])){
        count++
      }
    }
    return count == arr.length
    }
  }