function sumDigits(number) {
    number = Math.abs(number).toString().split("").map(a=>parseInt(a))
    let total = 0
    for(let i = 0;i<number.length;i++){
      total += number[i]
    }
    return total
  }