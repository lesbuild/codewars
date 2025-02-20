function addDelete(arr,del,add){
    return arr.toSpliced(arr.findIndex(a=>a==del),1,add)
}