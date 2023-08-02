function divCon(x){
    let total = 0
    for(let i =0;i <x.length;i++){
      if((typeof x[i]) === "number"){
        total += x[i]
      }
      else if((typeof x[i]) === "string"){
        total -= Number(x[i])
      }
    }
    return total
  }