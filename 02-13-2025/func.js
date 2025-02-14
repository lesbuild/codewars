function simpleCalculator(num1,num2,oper){
    return oper === "add" ? num1 + num2 : oper === "multiply" ? num1 * num2 : oper === "divide" ?
           num1 / num2 : oper === "minus" ? num1 - num2 : "Enter a valid operator!"
  }