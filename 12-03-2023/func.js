function colorOf(r,g,b){
    let R = r.toString(16)
    let G= g.toString(16)
    let B = b.toString(16)
    if(R.length == 1){
      R = "0" + R
    }
    if(G.length == 1){
      G = "0" + G
    }
    if(B.length == 1){
      B = "0" + B
    }
    return "#" + R + G + B
  }