function lostSheep(friday,saturday,total){
    return total - friday.reduce((a,b)=>a+b, saturday.reduce((a,b)=>a+b, 0))
  }