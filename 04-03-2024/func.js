function reverse(str){
    let arr = str.split(" ")
    for(let i = 0;i < arr.length;i++){
      if(i % 2 == 1){
        arr[i] = arr[i].split("").reverse().join("")
      }
    }
    return arr.join(" ").trim()
  }