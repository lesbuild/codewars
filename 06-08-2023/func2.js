function getSize(w, h, l){
    let newArr =[]
    newArr.push(2*(l*w + l*h + w*h))
    newArr.push(w * h * l)
    
    return newArr
  }