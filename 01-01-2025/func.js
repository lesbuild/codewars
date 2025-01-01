function sumOfWholeOrLast(arr){
    let total = 0
    for(let i = 0;i<arr.length-1;i++){
        total += arr[i] 
    }
    return total > arr[arr.length-1] ? "Power of Many wins!" : total < arr[arr.length-1] ? "End number is the Boss!" : "It's an even match!"
}