function alternate(n, firstValue, secondValue){
    let arr = new Array(n)
    for(let i = 0;i<arr.length;i++){
      if(i == 0 || i % 2 == 0){
        arr[i] = firstValue
      }
      else{
        arr[i] = secondValue
      }
    }
    return arr
  }