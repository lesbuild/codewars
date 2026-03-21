function findMissingNums(arr){
    let missing = []
    arr = arr.sort((a,b)=>a-b)
    let min = arr[0]
    let max = arr[arr.length-1]
    for(let i = min;i<max;i++){
        if(!arr.includes(i)){
            missing.push(i)
        }
    }
    return missing
}

// Description: 

// Find the missing number from the smallest number in the array up to the highest number in the array.