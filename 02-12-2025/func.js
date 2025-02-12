function encryptMe(str){
    let en = ""
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0;i<str.length;i++){
        let ind = alpha.indexOf(str[i]) + 7
        if(ind > 25){
            en += alpha[ind - 25]
        }
        else{
            en += alpha[ind]
        }
    }
    return en
}

function decryptMe(str){
    let de = ""
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0;i<str.length;i++){
        let ind = alpha.indexOf(str[i]) - 7
        if(ind < 0){
            de += alpha[ind + 25]
        }
        else{
            de += alpha[ind]
        }
    }
    return de
}