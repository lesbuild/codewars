function payOffLoan(rate,mp,principal){
    let total = -((Math.log(1-(principal*(rate/12)/mp)))/Math.log(1+(rate/12)))
    let year = Math.floor(total / 12)
    let months = total %  12
    return `Loan will be paid in ${year} years and ${months.toFixed(1)} month/s`
}
// Description:

// Calculate how long to pay off a loan with interest rate, monthly Payment 

// and principal amount given.


// Example:

// payOffLoan(0.06,5000, 300000) => "Loan will be paid in 5 years and 11.5 month/s"