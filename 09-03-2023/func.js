function tidyNumber(n){
    let numArr = n.toString().split("").map(a=>parseInt(a))
    for(let i = 0; i < numArr.length - 1;i++){
      let next = numArr[i + 1]
      if(numArr[i] > next){
        return false
      }
    }
    return true
  }