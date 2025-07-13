function meanVsMedian(numbers) {
  numbers.sort((a,b)=>a-b);
  let mean = numbers.reduce((a,b)=>a+b,0)/numbers.length;
  let median = numbers[1];
  return  mean > median ? "mean" : median > mean ? "median" : "same"
}