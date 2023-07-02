function arithmetic(a, b, operator){
    //your code here!
   return operator == "subtract" ? a - b : 
          operator == "add" ? a + b :
          operator == "divide" ? a / b : a * b
  }