function evenNumbers(array, number) {
    return array.filter(i => i % 2 == 0).slice(-number)
  }