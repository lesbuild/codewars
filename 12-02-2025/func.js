function forwardOrBack(arr){
    let move = 0
    for(let i = 0 ;i<arr.length;i++){
        if(arr[i][0] === ">"){
            move += arr[i].length
        }
        else{
            move -= arr[i].length
        }
    }
    return move
}

// Description:

// Total of the amount of moves by add if the move is ">" 

// and subtract if the move is "<". There will be instance that will

// multiple forward or backward within a move. 

// Example:

// forwardOrBack([">>>","<<",">"]) = 2