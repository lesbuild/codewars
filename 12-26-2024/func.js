function convert(number){
    let char = ""
    for(let i = 2;i<=number.length;i+=2){
      char += String.fromCharCode(+number.slice(i-2,i))
    }
    return char
  }