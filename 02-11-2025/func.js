function addItUp(arr){
    return typeof arr[0] == "number" ? arr.reduce((a,b)=>a+b,0) : arr.join(" ")
}