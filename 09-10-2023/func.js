function calc(x){
    let newArr =[]
    for(let i =0;i<x.length;i++){
      newArr[i] = x.charCodeAt(i)
    }
    let total1 = newArr.join("").split("").map(a=>parseInt(a)).reduce((a,b)=>a+b)
    let total2 = newArr.join("").replaceAll("7","1").split("").map(a=>parseInt(a))
                .reduce((a,b)=>a+b)
    return total1 - total2
  }