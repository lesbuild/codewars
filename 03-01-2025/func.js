function scoreOrTurnover(arr,energy){
    let indices = []
    const element =  "O"
    let idx = arr.indexOf(element);
    while (idx !== -1) {
      indices.push(idx);
      idx = arr.indexOf(element, idx + 1);
    }
        return indices.length <= energy ? "Score!" : "Turnover, go defend!"
}