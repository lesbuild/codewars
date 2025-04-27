function solve(a, b) {
    let aPts = 0
    let bPts = 0
    for(let i = 0;i<a.length;i++){
      if(a[i] > b[i]){
        aPts++
      }
      else if(a[i] < b[i]){
        bPts++
      }
    }
    return aPts > bPts ? `${aPts}, ${bPts}: Alice made "Kurt" proud!` : 
           aPts < bPts ? `${aPts}, ${bPts}: Bob made "Jeff" proud!` : 
                `${aPts}, ${bPts}: that looks like a "draw"! Rock on!`
  }