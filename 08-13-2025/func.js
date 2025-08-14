function xMarkTheSpot(str){
    let idxArray = []
    for(let i = 0;i<str.length;i++){
        if(str[i] == "o"){
            idxArray.push(i)
        }
    }
    return idxArray
}
// Find index of "x" and put it in an array