function smallEnough(a, limit){
    return a.filter(e=>e > limit).length > 0 ? false : true
  }