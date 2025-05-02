function arr2bin(arr){
    let total = 0
    for(let i = 0;i<arr.length;i++){
      if(typeof arr[i] === "number"){
        total += arr[i]
      }
    }
    return total.toString(2)
  }
  function arr2bin(arr){
    return arr.filter(a=>typeof a==="number").reduce((a,b)=>a+b,0).toString(2)
  }