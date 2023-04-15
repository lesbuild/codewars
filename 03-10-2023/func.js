function invert(array) {
    for(let i = 0; i < array.length;i++){
      if(array[i]  != null){
        array[i] = array[i] * -1
      } 
   }return array
 }