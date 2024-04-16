function barTriang(p1, p2, p3){
    let a = Math.round(((p1[0] + p2[0] + p3[0])/3) * 10000) / 10000
    let b = Math.round(((p1[1] + p2[1] + p3[1])/3) * 10000) / 10000
    return [a,b]
  }