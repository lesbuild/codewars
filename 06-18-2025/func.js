function sumOfOddOrEven(arr){
    let even = arr.filter(a=>a % 2 == 0).reduce((a,b)=>a+b,0)
    let odd = arr.filter(a=>a % 2 == 1).reduce((a,b)=>a+b,0)
    return even > odd ? "Even has bigger sum!" : "Odd has bigger sum"
}
// Which has a bigger sum : Odd or Even