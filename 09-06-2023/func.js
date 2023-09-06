function min(arr, toReturn) {
    return toReturn == 'value' ? Math.min(...arr) : 
                                 arr.findIndex(a=>a === Math.min(...arr))
  }