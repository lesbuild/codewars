function bump(x){
    let roadCond = x.split("")
    let bumps = 0
    for(let i = 0;i <roadCond.length;i++){
      (roadCond[i] == "n") ? bumps++ : bumps
    }
    return bumps <= 15 ? "Woohoo!" : "Car Dead"
  }