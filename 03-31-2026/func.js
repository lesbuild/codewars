function seqToOne(n){
  let arr = [n]
  while(n!=1){
    if(n < 1){
      arr.push(n+1)
      n++;
    }
    else{
      arr.push(n-1)
      n--;
    }
  }
  return arr
}
// Task
// Given the number n, return the sequence of numbers from n to 1.


// Range
// The number n can be negative and also large number:  -9999  <=  n  <=  9999


// Examples
// n =  5    >>     5, 4, 3, 2, 1
// n = -1    >>    -1, 0, 1

