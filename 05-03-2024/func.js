function none(arr, fun){
    return arr.filter(a=>fun(a)).length == 0 ? true : false
  }