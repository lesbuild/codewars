function initials(n){
    n = n.split(" ")
    for(let i  = 0;i<n.length;i++){
      if(i === n.length - 1){
        n[i] = n[i][0].toUpperCase() + n[i].slice(1)
      }
      else{
        n[i] = n[i][0].toUpperCase() + "."
      }
    }
    return n.join("")
  }