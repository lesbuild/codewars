var isSquare = function(arr){
    return arr == "" ? undefined : arr.every(e=>Math.sqrt(e) % 1 == 0)
  }