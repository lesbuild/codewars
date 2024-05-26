function bandNameGenerator(str) {
    let cap = str[0].toUpperCase() + str.slice(1)
    return str[0] === str[str.length-1] ? cap + str.slice(1) : "The " + cap  
  }