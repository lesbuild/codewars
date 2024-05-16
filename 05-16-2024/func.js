function high(x){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let hiScore = 0
    let hiWord = ""
    x = x.split(" ")
    for(let i = 0;i<x.length;i++){
      let temp =  x[i].split("").map(a=>alpha.indexOf(a) + 1).reduce((a,b)=>a+b)
      if(temp > hiScore){
        hiScore = temp
        hiWord = x[i]
      }
    }
    return hiWord
  }