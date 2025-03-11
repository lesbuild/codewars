function drawNBack(str,target){
    return str.includes(target) ? str.replace(target,"") + target : 
           `There is no ${target} in this string`
}