function numberJoy(n) {
    let num = n.toString().split("").reduce((a,b)=>parseInt(a)+parseInt(b))
    let reverse = Number(num.toString().split("").reverse().join(""))
    return num * reverse == n
}