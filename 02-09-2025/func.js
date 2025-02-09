function whereAreWe(moves){
    let x = 0
    let y = 0
    for(let i = 0;i<moves.length;i++){
        if(moves[i] == "n"){
            y++
        }
        else if(moves[i] == "s"){
            y--
        }
        else if(moves[i] == "e"){
            x++
        }
        else{
            x--
        }
    }
    return `Our coordinates are ${[x,y]}`
}