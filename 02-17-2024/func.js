function longestWord(stringOfWords){
    //Give me back the longest word!
    let longWord = ""
    let words = stringOfWords.split(" ")
    for(let i =0;i<words.length;i++){
      if(longWord.length <= words[i].length){
        longWord = words[i]
      }
    }
    return longWord
    
  }