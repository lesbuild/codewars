function goMid(arr1,arr2){
    return arr1.join(arr2).sort((a,b)=>a - b)[arr1.join(arr2).length/2]
}