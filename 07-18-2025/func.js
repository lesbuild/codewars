function groupUp(arr) {
    let wordArr = []
    arr = arr.sort((a,b)=>a.length-b.length)
    let shortLen = arr[0].length
    let longLen = arr[arr.length-1].length
    for(let i = shortLen;i<=longLen;i++){
        if(arr.find(a=>a.length == i)){
            wordArr.push(arr.filter(a=>a.length == i))
        }
    }
    return wordArr
}