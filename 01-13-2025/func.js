function nextPal(val) {
    val++;
    let reverse = +val.toString().split("").reverse().join("")
    while(val != reverse){
      val++
      reverse = +val.toString().split("").reverse().join("")
    }
    return val;
}