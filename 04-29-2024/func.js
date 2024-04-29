function balance(left,right){
    let l = left.replaceAll("!", "2").replaceAll("?","3").split("")
    .reduce((a,b)=>parseInt(a)+parseInt(b))
    let r = right.replaceAll("!", "2").replaceAll("?","3").split("")
    .reduce((a,b)=>parseInt(a)+parseInt(b))
    return l > r ? "Left" : l < r ? "Right" : "Balance"
    
  }