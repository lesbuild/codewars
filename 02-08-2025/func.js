function jumpOrDuck(arr){
    let action = []
    for(let i = 0;i<arr.length;i++){
        if(arr[i] == 1){
            action.push("Go Duck!")
        }
        else if(arr[i] == 2){
            action.push("Go Jump!")
        }
        else{
            action.push("Walking!")
        }
    }
    return action
}