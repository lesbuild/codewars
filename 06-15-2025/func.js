function OnOrOff(str){
    str = str.split("")
    return str.filter(a=>a=="o") > str.filter(a=>a=="x") ? str.join("").replace("x","o") : str.join("").replace("o","x")
}
// Turn all the lights on if majority of the lights is on or turn it off otherwise