function targetPower(arr, target){
    return Math.pow(arr.reduce((a,b)=>a+b)-target, target)
}
// Sum the array but exclude the target then raise the power to the target