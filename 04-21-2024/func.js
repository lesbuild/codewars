function gordon(a){
    return a.replaceAll("a", "@").replaceAll(/[eoiu]/g, "*").split(" ").map(a=>a.toUpperCase()+"!!!!").join(" ")
  }