function productArray(numbers){
    let last = numbers.length - 1
    let prodArr = []
    for(let i = 0;i < numbers.length;i++){
      let prod = 1
      for(let j = last;j != -1;j--){
        if(j != i){
        prod *= numbers[j]
      }
      }
      prodArr.push(prod)
    }
    return prodArr
  }