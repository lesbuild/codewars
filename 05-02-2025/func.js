function arr2bin(arr){
    let total = 0
    for(let i = 0;i<arr.length;i++){
      if(typeof arr[i] === "number"){
        total += arr[i]
      }
    }
    return total.toString(2)
  }