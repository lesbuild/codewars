function findMultiples(integer, limit) {
    let newArr = []
    let counter = Math.trunc(limit/integer)
    for(let i = 1;i<=counter;i++){
      newArr.push(integer*i);
    }
    return newArr
  }