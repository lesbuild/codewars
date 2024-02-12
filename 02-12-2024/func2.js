function bigToSmall(arr){
    let fullArr = []
    for(let i =0;i<arr.length;i++){
      fullArr = fullArr.concat(arr[i])
    }
    return fullArr.sort((a,b)=>b-a).join(">")
    
  }