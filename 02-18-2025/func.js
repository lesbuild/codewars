function throwDie(){
    let randomNum = Math.ceil(Math.random() * 6)
    return randomNum === 0 ? throwDie() : randomNum
}