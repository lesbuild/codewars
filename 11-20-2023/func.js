function first(arr, n) {
    // return arr;
    return n == 0 ? [] : n == undefined ? [arr[0]] : arr.splice(0,n)
  }