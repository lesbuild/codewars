function solve(s){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    return alpha.includes(s.split("").sort().join(""))
}