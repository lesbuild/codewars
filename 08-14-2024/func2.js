solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    temp = temp + 273.15
    return (((givenMass1/molarMass1) + (givenMass2/molarMass2)) * (temp * 0.082)) / volume
  }