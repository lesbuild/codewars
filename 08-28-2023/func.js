function pointsPer48(ppg, mpg) {
    return ppg == 0 ? 0 : Number(((48 / mpg) * ppg).toFixed(1))
  }