function sumOfIntegersInString(s){
    let strArray = s.split(/[a-z\W|_]/gi).filter(Number)
      if(strArray.length == 0){
        return 0
      }
     return strArray.map(a=>parseInt(a)).reduce((a,b)=>a+b,0)
   }