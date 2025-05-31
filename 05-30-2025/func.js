function LookFor(str,target){
    return str.split(target).map(a=>a.split("").reverse.join("")).join("")
}