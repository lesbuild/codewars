function freqSeq(str, sep) {
    return str.split('').map((e, i, arr) => arr.filter(e2 => e2 === e).length).join(sep);
  }