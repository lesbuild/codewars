function minValue(values){
    let newSet = [...new Set(values)]
    newSet = newSet.sort((a,b)=> a-b).join("")
    return Number(newSet)
  }