function splitAndReverse(num){
    let a = "abcdefghijklmnopqrstuvwxyz"
    return a.split(a[num]).map(a=>a.split("").reverse().join("")).join("")
}
// Separate alphabet by index and reverse it