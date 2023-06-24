function sumOfMinimums(arr) {
    // your code here
    let minArr = []
    for(let i = 0;i < arr.length;i++){
        minArr.push(arr[i].sort((a,b)=> a-b)[0])  
      }
    return minArr.reduce((a,b)=> a+b)
  }