function addWord(str, word){
    return str.split(" ").map(a=>a + word).join(" ")
}