function nicknameGenerator(name){
    return name.length < 4 ? "Error: Name too short" : 
    name[2].match(/[aeoiu]/gi) ? name.substring(0,4) : name.substring(0,3)
  }