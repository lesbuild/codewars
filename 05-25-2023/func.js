function rowWeights(array){
    let newArr = [0, 0]
    for(let i = 0; i < array.length;i++){
      if(i === 0 || i % 2 == 0){
        newArr[0] += array[i]
      }
      else{
         newArr[1] += array[i]
      }
     
    }
    return newArr
  }