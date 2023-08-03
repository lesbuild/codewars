function XO(str) {
    //code here
  let xLen = 0
  let oLen = 0
  for(let i = 0;i < str.length;i++){
    if(str[i].toLowerCase() === "x"){
      xLen++
    }
    else if(str[i].toLowerCase() === "o"){
      oLen++
    }
  }
  return oLen === xLen || (oLen == 0 && xLen == 0) ? true : false
  
}