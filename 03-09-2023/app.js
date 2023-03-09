function firstNonConsecutive (arr) {
  
    for (let i = 1; i < arr.length;i++){
      let curr = arr[i]
      let prev = arr[i-1]
      if(curr - prev > 1){
        return curr
      }
    }
    return null
  }