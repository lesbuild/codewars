function spot(s1,s2){
  let diff = []
  for(let i = 0;i<s1.length;i++){
    if(s1[i] != s2[i]){
      diff.push(i)
    }
  }
  return diff
}