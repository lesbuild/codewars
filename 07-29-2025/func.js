function guessTheTarget(str,guess){
    let msg = ""
    if(str[guess]== /[o]/g){
        str = str.replace(str[guess],"_")
        msg = "hit"
    }
    else{
        msg = "miss"
    }
    return msg == "hit" && !str.includes("o") ? "Victory, all ships have sunk" :
           msg == "hit" &&  str.includes("o") ? "Hit a target, get another turn" : "Miss, Try again"
}