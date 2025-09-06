var fibsFizzBuzz = function(n) {
  if(n == 1){
    return [1]
  }
    const fib = [1, 1]
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib.map(a=>a%15== 0 ? "FizzBuzz" : a % 5 == 0 ? "Buzz" : a % 3 == 0 ? "Fizz" : a)
}