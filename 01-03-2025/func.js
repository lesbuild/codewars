function selectedMove(arr,arrInd){
    let select = []
    for(let i = 0;i<arrInd.length;i++){
        select.push(arr[arrInd[i]])
    }
    return select
}