function eliminateUnsetBits(number) {
    return parseInt(number) == 0 || number === "" ? 0 : parseInt(number.replaceAll("0",""),2)
  }