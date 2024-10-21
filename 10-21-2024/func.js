function combine() {
    var newObj = {}
  
    for (var i = 0; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            newObj[key] = newObj[key] ? newObj[key] + arguments[i][key]: arguments[i][key]
          }
    }
    return newObj;
  }