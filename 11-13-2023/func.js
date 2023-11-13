function foldTo(distance) {
    if(distance < 0){
      return null
    }
    let paperLen = 0.0001
    let foldCount = 0
    while(distance > paperLen){
      paperLen *= 2
      foldCount++
    }
    return foldCount
  }