function chargeTime(batteryPerc){
    return batteryPerc < 20 ? "Battery low, time to charge!" :  "For longer battery health, charge soon at 20!";
}