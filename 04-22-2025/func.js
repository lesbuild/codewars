function catMouse(x, j){
    if(x.includes("C") && x.includes("m") && x.includes("D")){
      let distance = Math.abs(x.indexOf("m") - x.indexOf("C")) - 1
      let cPos = x.indexOf("C")
      let mPos = x.indexOf("m")
      let dPos = x.indexOf("D")
      return distance > j ? "Escaped!" : (dPos > mPos && dPos < cPos) || (dPos < mPos && dPos > cPos) ? "Protected!" :  "Caught!"  
    }
    else{
      return "boring without all three"
    }
  }