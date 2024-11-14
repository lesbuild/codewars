function matchArrays(v,r){
    let u = 0
    for(let i = 0;i<v.length;i++){
      for(let j = 0;j<r.length;j++){
        if(v[i] == r[j]){
          u++;
          continue;
        }
      }
    }
     return u
   }