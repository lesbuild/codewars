function threeInOne(arr){
    let copyArr = arr.slice()
    let sumArr = []
    let sum = 0
    for (let i = 0; i < copyArr.length; i++) {
      sum += copyArr[i]
      if((i + 1) % 3 === 0) {
        sumArr.push(sum)
        sum = 0
      }
    }
    return sumArr  
  }