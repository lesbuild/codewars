function letterPls(str){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    return str.split("").filter(a=>alpha.includes(a)).join("")
}