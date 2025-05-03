function lowestProduct(input) { 
    if(input.length < 4){
      return "Number is too small"
    }
    let lowest = input.substring(0,4).split("").reduce((a,b)=>+a*+b,1)
    for(let i = 1;i<input.length - 3;i++){
      let num = input.substring(i,i+4).split("").reduce((a,b)=>+a*+b,1)
      if(lowest > num){
        lowest = num
      }
    }
    return lowest
  }