function removeChars(s) {
  return /[a-z\s]/gi.test(s) ? s.match(/[a-z\s]/gi).join("") : ""
}
