function sortMyString(S) {
    let oddInd = ""
    let evenInd = ""
    for(let i = 0;i < S.length;i++){
      if(i % 2 == 1){
        oddInd += S[i]
      }
      else{
        evenInd += S[i]
      }
    }
  return `${evenInd} ${oddInd}`
}