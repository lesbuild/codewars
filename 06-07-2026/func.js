function closest(arr){
  const sorted = [...new Set(arr)].sort((a, b) => Math.abs(a) - Math.abs(b));
  return sorted[0] + sorted[1] ? sorted[0] : null;
}

// Description:

// Given an array of integers, find the number that are closest to zero, and if there are two numbers equally close to zero, return null. If the array is empty, return null.