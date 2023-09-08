function minSum(arr) {
    let total = 0
    arr = arr.sort((a,b)=>b-a)
    for(let i = 0;i <arr.length/2;i++){
      total += arr[i] * arr[arr.length - 1 - i]
    }
    return total
  }