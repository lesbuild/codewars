function avgArrays(arr1, arr2){
    return (arr1.reduce((a,b)=>a+b,0) + arr2.reduce((c,d)=>c+d,0)) / 2
}