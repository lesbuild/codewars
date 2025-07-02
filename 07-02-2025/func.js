function shoutOrShh(str){
    return str.split("").map(a=> a=="o" ? "Shout!" : "Keep quiet!")
}
"Are you shouting or quiet?"