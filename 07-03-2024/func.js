function pattern(n){
    if(n == 1){
      return 1
    }
     else{
       var output = "1\n"
       for(let i = 2;i<=n;i++){
         if(i == n){
           output += "1" + "*".repeat(i-1) + `${i}`
         }
         else{
           output += "1" + "*".repeat(i-1) + `${i}\n`
         }
       }
       return output
     }
   }