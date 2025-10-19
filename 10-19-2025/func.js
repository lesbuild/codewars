function findMissingNumbers(arr){
  let miss = []
  let idx = 0
  let counter = arr[idx]
  while(counter != arr[arr.length-1]){
    if(arr[idx] != counter){
      miss.push(counter)
    }
    else{
      idx++
    }
    counter++
  }
  return miss
}
// Description:
// You will get an array of numbers.

// Every preceding number is smaller than the one following it.

// Some numbers will be missing, for instance:

// [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
// Your task is to return an array of those missing numbers:

// [-1,0,2,3,4]