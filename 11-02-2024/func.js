function explode(x){
    var ans = []
    if(x.every(a=>typeof a == "number")){
      var len = x.reduce((a,b)=>a+b)
    }
    else if(x.every(a=>typeof a == "string")){
      return "Void!"
    }
    else{
      var len = x.filter(a=>typeof a == "number")
    }
    for(let i = 0;i<len;i++){
      ans.push(x)
    }
    return ans
  }