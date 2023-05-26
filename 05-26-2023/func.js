function betterThanAverage(classPoints, yourPoints) {
    let total = 0
    for(let i = 0;i < classPoints.length;i++){
      total += classPoints[i]
    }
    return (total + yourPoints) / classPoints.length <= yourPoints ? true : false
  }