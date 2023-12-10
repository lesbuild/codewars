multiplicationTable = function(size) {
    // insert code here
    let xTable = []
    for(let i = 1;i<=size;i++){
      let newArr = []
      for(let j = 1;j<=size;j++){
        newArr.push(i * j)
      }
      xTable.push(newArr)
    }
    return xTable
  }