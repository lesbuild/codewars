function looseChange(cents){
    var coins = {Nickels : 0,Pennies : 0,Dimes : 0,Quarters : 0};
    if (cents <= 0) return coins;
    coins.Quarters = Math.floor(cents / 25);
    coins.Dimes = Math.floor(cents % 25 / 10);
    coins.Nickels = Math.floor(cents % 25 % 10 / 5);
    coins.Pennies = Math.floor(cents % 25 % 10 % 5);
    return coins;
  }