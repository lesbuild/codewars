function disariumNumber(n){
    let arrayN = n.toString().split("").map(a=>parseInt(a))
    let sum = 0
    for(let i =0;i<arrayN.length;i++){
      sum += Math.pow(arrayN[i], i + 1)
    }
    return sum === n ? "Disarium !!" : "Not !!"
  }