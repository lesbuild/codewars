function isDivisible(n) {
    for (var i = 1; i < arguments.length; i++) {
      if (n % arguments[i]) { return false };
    }
    return true;
  }