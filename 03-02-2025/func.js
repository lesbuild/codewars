function winOrLose(numOfTurn,enemyHealth,choiceOfWeapon){
    const fireRate = {"machineGun" : 15, "bazooka" : 40 , "pistol" : 5, "shotgun" : 25}
    return fireRate[choiceOfWeapon] * numOfTurn >= enemyHealth ? "Win!" : "Lose!"
}