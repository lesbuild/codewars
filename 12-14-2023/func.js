function getMinMax(arr){
    let newArr = arr.sort((a,b)=>a-b)
    return [newArr[0], newArr[newArr.length - 1]]
  };