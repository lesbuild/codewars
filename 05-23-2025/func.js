function battleOfChar(str){
    return str === "" ? "empty string" : str.match(/[a-z]/gi).length > str.match(/[0-9]/g).length ?
           "string wins!" : str.match(/[a-z]/gi).length > str.match(/[0-9]/g).length ?
           "number wins!" : "Draw, an even match!"
}