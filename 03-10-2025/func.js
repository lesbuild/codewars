function snakeNLadders(die,board,position){
    position += die;
    // O for ladder 
    // X for snakes
    return board[position] === "O" ? position + Math.floor(Math.random() * 10) : 
           board[position] === "X" ? position - Math.floor(Math.random() * 10) : position === 100 ?
            "You win!": position < 0 ? position = 0 : position 
}