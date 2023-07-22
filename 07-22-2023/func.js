function giveMeFive(obj){
    //coding here
    let newArr = []
    for(var key in obj){
      if(key.length == 5){
        newArr.push(key)
      }
      if(obj[key].length == 5){
        newArr.push(obj[key])
      }
      }
    return newArr
  }