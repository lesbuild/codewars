function hangMan(str,guess, lives){
    if(str.includes(guess)){
        str = str.replace(guess,"")
    }
    else{
        lives--
    }
    return lives == 0 ? "You lose!" : [str,lives]
}