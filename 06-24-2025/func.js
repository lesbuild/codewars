function peekABoo(str){
    return str.replaceAll("o-o","!").replace(/[^!]/g,"").length
}
// Look for people with binoculars represented by o-o