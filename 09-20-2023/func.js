function periodIsLate(last, today, cycleLength){
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.floor((today - last) / msPerDay) > cycleLength;
  }