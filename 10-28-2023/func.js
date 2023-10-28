function switcheroo(x){
    return x.split("").map(function(x){
      if(x == "a") return "b";
      if( x == "b") return "a";
      if(x == "c") return "c"
    }).join("");
  }