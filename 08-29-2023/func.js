function splitAndMerge(string, separator) {
    let sep = string.split(" ")
    for(let i = 0;i < sep.length;i++){
      sep[i] = sep[i].split("").join(separator)
    }
    return sep.join(" ")
  }