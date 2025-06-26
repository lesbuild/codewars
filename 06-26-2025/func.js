function numbers(){
  for(let i = 0;i<arguments.length;i++){
    if(typeof arguments[i] == "string" || arguments[i] == null){
      return false
    }
  }
  return true
}