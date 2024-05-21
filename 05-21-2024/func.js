function killer(suspectInfo, dead) {
    for(const name in suspectInfo){
      if((dead.every((element)=>suspectInfo[name].includes(element)))){
        return name
      }
    }
  }