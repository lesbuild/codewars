function stray(numbers) {
    let newN = numbers.sort()
    return newN[0] == newN[1] ? newN[newN.length-1] : newN[0]
  }