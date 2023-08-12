function menFromBoys(arr){
    arr = Array.from(new Set(arr))
    let odd = arr.filter(a => a % 2).sort((a, b) => b - a)
    let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b)
    return even.concat(odd)
  }