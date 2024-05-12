function chain(x, fns) {
    return fns.reduce(function(x, fn) {
      return fn(x)
    }, x)
  }