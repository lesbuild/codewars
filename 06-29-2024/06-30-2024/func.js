function scrollingText(text){
    let arr = [text.toUpperCase()]
    for(let i =1;i<text.length;i++){
      let first = text[0].toUpperCase()
      text = text.substring(1).toUpperCase() + first;
      arr.push(text);
    }
    return arr
  }