function sumOfDifferences(arr) {
    let newArr = []
    let sortedArr = arr.sort((a,b)=> b-a)
    if(arr.length > 1){
    for(let i=0; i < sortedArr.length - 1;i++){
      let nextNum = sortedArr[i + 1]
      newArr.push(sortedArr[i] - nextNum)
    }
    return newArr.reduce((a,b)=> a+ b)
    }
    else{
      return 0
    }
  }