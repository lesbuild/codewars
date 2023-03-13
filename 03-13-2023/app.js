function gimme (triplet) {
    let min = Math.min(...triplet)
    let max = Math.max(...triplet)
    return triplet.findIndex(element => element != min && element != max);
   
  }