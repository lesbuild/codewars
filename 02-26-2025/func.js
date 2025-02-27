function openReceiver(arr){
    return (arr.findLastIndex(r=>r === "O") + 1) * 10
}