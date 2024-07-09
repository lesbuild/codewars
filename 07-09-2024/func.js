function makePassword(phrase) {
    return phrase.split(" ").map(a=>a[0]).join("").replace(/i/ig,"1").replace(/o/ig,"0")
    .replace(/s/ig,"5")
  }