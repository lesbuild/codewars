function factorial(n)
{ 
  if( n > 12 || n < 0){
    throw new RangeError
  }
  return n < 1 ? 1 : n * factorial(n - 1)
}