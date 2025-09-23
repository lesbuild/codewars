function backAndForth(str){
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let fHalf = str.substring(0,str.length/2).split("").map(a=>a=="a" ? "z" : alpha[alpha.indexOf(a)-1]).join("")
    let sHalf = str.substring(str.length/2).split("").map(a=>a=="z" ? "a" : alpha[alpha.indexOf(a)+1]).join("")
    return fHalf + sHalf
}
// Given a string of letters, make the first half letters and make every letter go back one letter  of their Alphabet, make the second half and make every letter go forward one letter of their Alphabet

// Note: string will always be lowercase

// Example:

// backAndForth("abcdef") => ("zabefg")