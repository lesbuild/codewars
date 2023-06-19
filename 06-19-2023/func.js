function lowercaseCount(str){
    //How many?
  return str.replaceAll(/[^a-z]/g, "").length
}