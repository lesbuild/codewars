function array(string) {
    // TODO
    return string.split(",").slice(1,-1).join(" ") || null
  }