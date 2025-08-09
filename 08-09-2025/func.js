function makeSentence(parts) {
  let sentence = ""
  for(let i = 0;i<parts.length;i++){
    if(parts[i + 1] != "," &&  i < parts.length){
      sentence += parts[i] + " "
    }
    else{
      sentence += parts[i]
    }
  }
  return sentence.replaceAll(".","").trim() + "."
}

function makeSentence(parts) {
  return parts.join(" ").replaceAll(/ \./g,"").replaceAll(" ,",",") + "."
}
// Implement a function, so it will produce a sentence out of the given parts.

// Array of parts could contain:

// words;
// commas in the middle;
// multiple periods at the end.
// Sentence making rules:

// there must always be a space between words;
// there must not be a space between a comma and word on the left;
// there must always be one and only one period at the end of a sentence.
// Example:

// makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'