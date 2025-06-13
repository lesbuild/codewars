function outAndNext(str,target){
    let alpha = "abcdefghijklmnopqrstuwxyz"
    return str.includes(target) ? str.replace(target,alpha[alpha.indexOf(target) + 1]) : "No letter has been found!"
}
//Look a character then replace it with next character in the alphabet