function sumArray(array) {
    let total = 0
    
    if(array != null){
     let newArr = array.sort((a, b) => a - b)
    newArr = newArr.splice(1, newArr.length -2) 
    for (let i = 0;i < newArr.length; i++){
      total += newArr[i]
    }}
    return total
  }