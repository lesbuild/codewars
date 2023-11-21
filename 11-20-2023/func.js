function first(arr, n) {
    return n == 0 ? [] : n == undefined ? [arr[0]] : arr.splice(0,n)
  }