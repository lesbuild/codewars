function startingMark(bodyHeight){
    let relativeHeight = bodyHeight - 1.52;
    let adjustmentConstant = (10.67 - 9.45) / (1.83 - 1.52);
    let bestMark = 9.45 + relativeHeight * adjustmentConstant;
    return Math.round(bestMark * 100) / 100;
  }