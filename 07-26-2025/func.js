function isItCountdown(arr){
    let timer = [9,8,7,6,5,4,3,2,1,0]
    return timer.every(e=>arr.includes(e))
}