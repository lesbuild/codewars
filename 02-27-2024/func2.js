function arrayLeaders(numbers){
    let leader = []
    for(let i=0;i<numbers.length;i++){
      let others = 0
      for(let j=i+1;j<numbers.length;j++){
        others+=numbers[j]
      }
      if(numbers[i] > others){
        leader.push(numbers[i])
      }
    }
    return leader
  }