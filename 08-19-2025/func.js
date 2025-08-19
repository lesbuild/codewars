function battleOfSides(num){
    num = num.toString();
    let left = num.substring(0,num.length/2).split("").reduce((a,b)=>parseInt(a)+parseInt(b),0)
    let right = num.substring(num.length/2).split("").reduce((a,b)=>parseInt(a)+parseInt(b),0)
    return left > right ? "Left side wins!" : left < right ? "Right side wins!" : "Draw"
}
// given number check if by adding first half, which is the left side, and second half, which is the right side, that the total is greater than the other.
// If left is greater then write "Left side wins!"
// If right is greater then write "Rigth side wins!"
// or if it's even then write "Draw!"