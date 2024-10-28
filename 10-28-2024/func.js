function filterHomogenous(arrays) {
    return arrays.filter(b => b.length > 0 && b.every(e => typeof e == typeof b[0]));
  }