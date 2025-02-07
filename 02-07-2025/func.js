function forwardOrBack(num){
    return num > 0 ? `Forward -> ${num} spaces!` : num < 0 ? `Back <- ${Math.abs(num)} spaces!` :
            "Stay!"
}