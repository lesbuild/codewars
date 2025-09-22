function moveForward(str){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    return str.toLowerCase().split("").map(a=>alpha.indexOf(a) == 25 ? "a" : alpha[alpha.indexOf(a)+1])
}
// Given a string, move each letter one letter forward in the alphabet

// Example:

// moveForward("abc") => "bcd"

// moveForward("dez") => "efa"