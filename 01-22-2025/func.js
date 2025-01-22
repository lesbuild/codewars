function goMove(arr){
    let action = ""
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > 0){
            action += "->".repeat(arr[i])
        }
        else if(arr[i] < 0){
            action += "<-".repeat(arr[i])
        }
    }
    return action
}