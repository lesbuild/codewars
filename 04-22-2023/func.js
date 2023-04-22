function calculateYears(principal, interest, tax, desired) {
    let years = 0
    while (principal < desired){
      let taxAmt = principal * interest * tax
      principal = principal * (1 + interest) - taxAmt
      years++
    }
  return years
}