function battleOfChar(str){
    return str.match(/[a-z]/gi).length > str.match(/[0-9]/g).length ?
           "string wins!" : "number wins!"
}