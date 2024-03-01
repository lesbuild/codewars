function consecutive(arr, a, b) {
    let posA = arr.findIndex(x=>x == a)
    let posB = arr.findIndex(y=>y == b)
    return Math.abs(posA - posB) == 1
  }