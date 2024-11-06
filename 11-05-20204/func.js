function paul(x){
    let lifeScore = {"kata": 5, "Petes kata" : 10, "life" : 0, "eating" : 1}
    let misScore = x.map(a=>lifeScore[a]).reduce((a,b)=>a+b,0)
    return misScore < 40 ? "Super happy!" : misScore < 70 ? "Happy!" :
           misScore < 100 ? "Sad!" : "Miserable!" 
  }