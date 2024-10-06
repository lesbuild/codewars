const wordPattern = (word)=>{
    word=word.toLowerCase()
    const numSet = [...new Set(word)]
    return word.split('').map(e=>numSet.indexOf(e)).join('.')
  }