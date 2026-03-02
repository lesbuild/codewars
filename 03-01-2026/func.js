function goMid(arr1,arr2){
    return arr1.concat(arr2).sort((a,b)=>a - b)[Math.floor(arr1.concat(arr2).length/2)]
}