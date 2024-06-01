function tailSwap(arr) {
  
    arr = arr.map(a=>a.split(":"))
    return [arr[0][0] + ":" + arr[1][1], arr[1][0] + ":" + arr[0][1]]
  }