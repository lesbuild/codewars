function twoSum(numbers, target) {
    let idx = []
    for(let i = 0;i<numbers.length;i++){
      for(let j = i + 1;j<numbers.length;j++){
        if(numbers[i] + numbers[j] === target){
          idx.push(i,j)
        }
      }
    }
  return idx
}