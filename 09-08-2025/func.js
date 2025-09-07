function getCount(words) {
  if(typeof words == "string"){
    let a = {"vowels":0,"consonants" : 0}
  let vowels = "aeiou"
  let consonants = "bcdfghjklmnpqrstvwxyz"
  words = words.toLowerCase()
  for(let i = 0;i<words.length;i++){
    if(vowels.includes(words[i])){
      a.vowels += 1
    }
    else if(consonants.includes(words[i])){
      a.consonants += 1
    }
  }
  return a
  }
  return {"vowels":0,"consonants" : 0}
}