function alienLanguage(str){
    return str.split(" ").map(a=>a.slice(0,-1).toUpperCase() + a[a.length-1].toLowerCase()).join(" ")
    
  }