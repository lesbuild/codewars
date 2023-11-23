function maxGap (numbers){
    let sorted = numbers.sort((a,b)=>b-a)
    let diffArr = []
   for(let i =0;i <sorted.length - 1;i++){
     diffArr.push(sorted[i] - sorted[i + 1])
   }
    return diffArr.sort((a,b)=>b-a)[0]
  }