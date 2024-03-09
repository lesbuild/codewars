function initializeNames(name){
    let full = ""
    if(name.split(" ").length <=2){
      return name
    }
    else{
      let n = name.split(" ")
      for(let i = 0;i<n.length;i++){
        if(i == 0 || i == n.length-1){
          n[i] = n[i]
        }
        else{
          n[i] = n[i][0] + "."
        }
      }
      return n.join(" ")
    }
  }