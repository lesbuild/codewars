var findDigit = function(num, nth){
    let numS = Math.abs(num).toString()
      if(nth < 1){
        return -1
      }
    else if (nth > numS.length){
      return 0
    }else {
      return Number(numS[numS.length - nth])
    }
  }