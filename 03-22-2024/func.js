function filterLongWords(sentence, n) {
    return sentence.split(" ").filter(a=>a.length >n)
  }