function keepOrder(ary, val) {
    let idx = ary.findIndex(x => val <= x)
    return idx < 0 ? ary.length : idx
  }