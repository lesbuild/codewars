function divisibleByThree(str){
    return str.split("").map(a=>parseInt(a)).reduce((a,b)=>a+b) % 3 == 0
  }