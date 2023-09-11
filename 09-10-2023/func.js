function calculate(num1, operation, num2) {
  //TODO: make a basic calculator. 
   return operation == "+" ? num1 + num2 : operation == "-" ? num1 - num2 :
          operation == "/"  && num2 != 0 ? num1 / num2 : operation == "*" ? num1 * num2 : null
 }