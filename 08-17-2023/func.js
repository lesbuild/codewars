function numberToPower(number, power){
    if(power != 0){
    let total = number
    for(let i =1;i <power;i++){
      total *= number
    }return total}
    else{
      return 1
    }
    
  }