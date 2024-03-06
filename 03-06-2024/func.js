function outed(meet, boss){
    let happyScore = 0
    for (const [key, value] of Object.entries(meet)){
    happyScore += value
    }
    return ((happyScore + meet[boss]) / (Object.keys(meet).length)) <= 5 ?
      "Get Out Now!" : "Nice Work Champ!"
  }