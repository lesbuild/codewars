function moveVowel(input) {
    return input.match(/[^aeoui]/g).join("") + input.match(/[aeoiu]/g).join("")
  }