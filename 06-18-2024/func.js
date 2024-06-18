function kebabize(str) {
    return str.replace(/[^a-z]/ig, '').
           replace(/^[A-Z]/, e => e.toLowerCase()).
           replace(/[A-Z]/g, e => `-${e.toLowerCase()}`);
  }