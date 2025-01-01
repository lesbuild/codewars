function sumOfWholeOrLast(arr){
    let total = 0
    for(let i = 0;i<arr.length-1;i++){
        total += arr[i] 
    }
    return total > arr[arr.length-1] ? "Power of Many wins!" : "End number is the Boss!"
}