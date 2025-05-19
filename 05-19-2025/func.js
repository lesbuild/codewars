function howManyGifts(maxBudget, gifts){
  let num = 0
  let total = 0
  gifts = gifts.sort((a,b)=>a-b)
  for(let i = 0;i<gifts.length;i++){
    total += gifts[i]
    if(total > maxBudget){
      return num
    }
    num++
  }
  return num
}