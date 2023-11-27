function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let totalM = blueStart + redStart
    let totalP = bluePulled + redPulled
    return (blueStart - bluePulled) / (totalM - totalP)
  }