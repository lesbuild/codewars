function targetSave(intitial,interest,target){
    let money = intitial
    interest = interest / 100
    let years = 0
    while(money < target){
        money *= (1 + interest)
        years++
    }
    return years
}