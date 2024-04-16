function consonantCount(str) {
    return str == "" || str.search(/[bcdfghjklmnpqrstvwxyz]/gi) == -1 ? 0 :
    str.match(/[bcdfghjklmnpqrstvwxyz]/gi).length
  }