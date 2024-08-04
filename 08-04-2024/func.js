function calcType(a, b, res) {
    return res == a + b ? "addition" : res == a * b ? "multiplication" : res == a / b ?
           "division" : "subtraction"
  }