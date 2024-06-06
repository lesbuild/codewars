function modifyMultiply (str,loc,num) {
    let word = str.split(" ")[loc] + " "
    return word.repeat(num).trim().split(" ").join("-")
   } 