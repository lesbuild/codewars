function addStringIntegers(arr){
    return arr.toString().split("").reduce((a,b)=>Number(a)+Number(b))
}