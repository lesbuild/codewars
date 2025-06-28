function scrambleArrange(str){
    return str.split("").sort((a,b)=>b-a).join("")
}
// Simple sorting