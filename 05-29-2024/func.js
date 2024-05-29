function tripleX(str){
    for(let i =0;i<str.length;i++){
      if(str[i] === "x" && str[i + 1] === "x" && str[i + 2] === "x"){
        return true
      }
      if(str[i] === "x" && str[i + 1] != "x"){
        return false
      }
    }
    return false
  }
  