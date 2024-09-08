function solve(arr) {
    return arr.reduce((e, curr) => e *= new Set(curr).size, 1);
  };