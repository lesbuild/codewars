function wordToBin(str){
    let arr = [];
    for (let i = 0; i < str.length; ++i){
      arr.push(0+str[i].charCodeAt().toString(2))
    }
    return arr;
  }