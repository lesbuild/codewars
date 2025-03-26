function onesComplement(n) {
    return n.split("").map(e => e === '1' ? '0' : '1').join('')
  };