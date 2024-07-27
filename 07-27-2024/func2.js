function dashatize(num) {
    let arr = Math.abs(num).toString().split("")
    for(let i = 0;i< arr.length - 1;i++){
      if(arr[i+1] % 2 == 1 || arr[i] % 2 == 1){
        arr[i] += "-"
      }
    }
    return arr.join("")
  }