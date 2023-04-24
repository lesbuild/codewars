function pipeFix(numbers){
    let l = numbers[numbers.length - 1]
    let newArr = []
    for(let i = numbers[0]; i <= l;i++){
      newArr.push(i)
    }
    return newArr
  }