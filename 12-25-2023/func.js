var removeVowels = function(str){
    return str.match(/[^aieou]/g) == null ? "" : str.match(/[^aieou]/g).join("")
  
  }