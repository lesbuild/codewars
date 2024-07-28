function isItANum(str) {
    str = str.replaceAll(/[^0-9]/g, "")
    return str[0] === "0" && str.length == 11 ? str : "Not a phone number"
  }