function findAverage(array) {
    let total = 0
    for (let i = 0; i < array.length; i++){
      
      total += array[i]
    }
    if (array.length == 0){
      return 0;
    }
    else {
      let avg = 0
      return avg = total / array.length
    }
  }