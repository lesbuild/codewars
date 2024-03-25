const findAll = (array, n) => {
    let idx = []
    for(let i = 0;i<array.length;i++){
      if(array[i] == n){
        idx.push(i)
      }
    }
    return array.includes(n) ? idx : []
  }