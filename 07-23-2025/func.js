function wayOfMajority(str){
    let arr = str.split("")
    let left = arr.filter(a=>a=="<").length
    let right = arr.filter(b=>b==">").length
    return left > right ? "We are going left!" : right > left ? "We are going right!" : "Let's stay here and decide again!"
}
// find out majority of the arrows are going