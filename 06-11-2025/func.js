function grabAndLast(str, target){
    return str.includes(target) ? str.replace(target,"") + target : "Target is not found!"
}
//updated for error checking and only takes one character not duplicate