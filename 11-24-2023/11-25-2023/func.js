var splitInParts = function(s, partLength){
    let newS = []
    let array = s.split("")
    while(array.length){
      newS.push( array.splice(0,partLength).join(""))
    }
    return newS.join(" ")
  }