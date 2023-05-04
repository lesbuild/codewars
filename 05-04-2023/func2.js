function highAndLow(numbers){
    let newArr = numbers.split(" ").sort((a,b) => a -b )
   return newArr[newArr.length - 1] + " " + newArr[0]
   }