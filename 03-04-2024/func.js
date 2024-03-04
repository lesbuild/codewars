function elevatorDistance(array) {
    let start = array[0]
    let distance = 0
    for(let i = 1;i<array.length;i++){
      if(array[i]> start){
        distance += array[i] - start
      }
      else{
        distance += start - array[i]
      }
      start = array[i]
    }
    return distance
  }