function evenChars(string) {
    let len = string.length
    return len < 2 || len > 100 ? "invalid string" : string.split("").filter((a,b)=>b % 2 == 1)
  }