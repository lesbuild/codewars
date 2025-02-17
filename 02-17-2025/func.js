function OpenBox(arr){
    let openArr = []
    for(let i = 0;i<arr.length;i++){
        if(arr[i] == "O"){
            openArr.push(i)
        }
    }
    return openArr
}