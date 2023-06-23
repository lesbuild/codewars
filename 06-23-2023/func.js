function mango(quantity, price){
    let discPrice = Math.floor(quantity / 3) * 2 * price
    let remain = quantity % 3 * price
    return quantity >= 3 ? discPrice + remain : quantity * price
  }