function dutyFree(normPrice, discount, hol){
    let discPrice =  normPrice * (discount / 100)
    return Math.floor(hol / discPrice)
    }