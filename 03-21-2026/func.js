function driveOrAlt(arr,budget){
    return arr.reduce((a,b)=>a+b) > budget ? "Need to walk more and take public transport to save money" : "Budget is well maintain this month"
}