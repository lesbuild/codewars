function mergeArrays(a, b) {
    var combine = []
    if(a.length > b.length){
    for(let i = 0;i<a.length;i++){
      combine.push(a[i]);
      if(b.length > i){
        combine.push(b[i]);
      }
      }
    }else{
      for(let i = 0;i<b.length;i++){
      
      if(a.length > i){
        combine.push(a[i]);
      }
        combine.push(b[i]);
      }
    }
   
    return combine
  }