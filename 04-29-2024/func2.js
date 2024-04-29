function dbSort(a){
    return a.filter(a=>(typeof(a) =="number")).sort((x,i)=>x-i)
      .concat(a.filter(a=>(typeof(a) =="string")).sort())
  }