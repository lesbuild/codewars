function findAllMole(arr){
    let indices = []
    const element =  "O"
    let idx = arr.indexOf(element);
    while (idx !== -1) {
      indices.push(idx);
      idx = arr.indexOf(element, idx + 1);
    }
    return indices
}