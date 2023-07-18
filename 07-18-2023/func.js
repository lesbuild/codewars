function whoIsPaying(name){
    let nameArr = []
    nameArr.push(name, name.slice(0,2))
    return name.length < 3 ? [name] : nameArr
  }