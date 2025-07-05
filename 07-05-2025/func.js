function singleOut(str){
    let unique = [...new Set(str.split(" "))]
    return unique
}
// remove duplicate words