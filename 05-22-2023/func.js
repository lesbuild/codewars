function solve(s){
    let lowerChar = 0
    let UpperChar =0
    for(let i=0;i < s.length;i++){
      if(s[i] === s[i].toLowerCase()){
        lowerChar++
      }
      else{
        UpperChar++
      }
    }
  return UpperChar > lowerChar ? s.toUpperCase() : s.toLowerCase()
}