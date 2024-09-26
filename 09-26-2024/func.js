function sortDict(dict){
    return Object.keys(dict).map(function (k) {
      return [isNaN(k) ? k : +k, dict[k]];
    }).sort(function (a, b) {
      return b[1] - a[1];
    });
  }