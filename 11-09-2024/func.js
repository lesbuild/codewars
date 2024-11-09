function pattern(n){
    var output="";
      for(let i=1;i<n+1;i++){
        for(let j=i;j<n+1;j++){
          output += j;
        }
        if(i!=n) output +="\n";
      }
    return output;
   }