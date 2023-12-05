function isValidWalk(walk) {
  
    let x = 0
    let y = 0
    for(let i = 0;i <walk.length;i++){
      if(walk[i] === 'n'){
        x++;
      }
      else if (walk[i] == 's' ){
        x--;
      }
      else if(walk[i] == 'w'){
        y--;
      }
      else{
        y++;
      }
    }
     return y == 0 && x == 0 && walk.length == 10 ? true : false
     
   }