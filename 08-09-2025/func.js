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