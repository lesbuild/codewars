function abbrevName(name){

    let newArr = name.split(" ")
    let arr = []
    for(let i = 0; i < newArr.length;i++){
      newArr[i] = newArr[i].charAt(0).toUpperCase()
    }
    return newArr.join(".")
    }