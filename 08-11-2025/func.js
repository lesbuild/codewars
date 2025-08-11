function stopGo(arr){
    return arr.map(a=>a == 0 ?  "X" : "=>".repeat(a)).join("")
}
// Make a movement of "=>" for number greater than 0 and mark the stop with an "X" if the number is 0