function cutIt(arr){
    let lowLen = arr[0].length
    for(let i =1;i <arr.length;i++){
      let temp = arr[i].length
      if(lowLen > temp){
        lowLen = temp
        
      }
      }
    return arr.map(a=>a.slice(0,lowLen))
    
  }