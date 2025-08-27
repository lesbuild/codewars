function turnAround(str){
    return str.includes(">") ? "<" + str.substring(0,str.indexOf(">")) : str.substring(str.lastIndexOf("-") + 1, str.indexOf("<")+1) + ">"
}
// Change the direction of the arrow starting
// from where the tail begins up to the arrow head

// Example:
// turnAround("---->") = "<----"
// turnAround("---->---") = "<----"
// turnAround("---<----") = "---->"