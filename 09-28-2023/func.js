function countPositivesSumNegatives(input) {
    let posNumCount = 0
    let totalNeg = 0
    if(input === null || input.length == 0){
      return []
    }
    else{
      for(let i = 0;i< input.length;i++){
      if(input[i] > 0){
        posNumCount++
      }
      else if(input[i] < 0){
        totalNeg += input[i]
      }
    }
    return [posNumCount, totalNeg]
    }
    
  }