function elementByOpposite(arr){
    for(let i = 0;i<arr.length;i++){
        arr[i] = arr[i] * (arr.length - 1 - i)
    }
    return arr
}