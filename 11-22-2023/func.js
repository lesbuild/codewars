function specialNumber(n){
    let splitN = n.toString().split("").map(a=>parseInt(a))
    for(let i = 0;i < splitN.length;i++){
      if(splitN[i] > 5){
        return "NOT!!"
      }
    }
    return "Special!!"
  }