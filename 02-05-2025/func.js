function numToAlpha(arr){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    return arr.map(a=>alpha[a])
}