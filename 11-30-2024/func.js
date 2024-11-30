function sumOrProduct(array, n) {
    let sum = array.sort((a,b)=>b-a).slice(0,n).reduce((a,b)=>a+b)
    let prod = array.slice(-n).reduce((a,b)=>a*b)
    return sum > prod ? "sum" : sum < prod ? "product" : "same"
  }