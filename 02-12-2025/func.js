function enrcyptMe(str){
    let en = ""
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0;i<str.length;i++){
        let ind = alpha.indexOf(str[i]) + 7
        if(ind > 25){
            en += str[ind - 25]
        }
        else{
            en += str[ind]
        }
    }
}

function decryptMe(str){
    let de = ""
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    for(let i = 0;i<str.length;i++){
        let ind = alpha.indexOf(str[i]) - 7
        if(ind < 0){
            de += str[ind + 25]
        }
        else{
            de += str[ind]
        }
    }
}