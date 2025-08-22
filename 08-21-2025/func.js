function addOrMultiple(arr){
    let total = 0
    for(let i = 0;i<arr.length;i++){
        if(i % 2 == 0){
            total += arr[i]
        }
        else{
            total *= arr[i]
        }
    }
    return total
}
// combine array of numbers, add if index is even or multiply if it's even