function countLettersAndDigits(input) {
    return input.match(/[0-9a-zA-Z]/g) != null ? input.match(/[0-9a-zA-Z]/g).length :
    0
  }