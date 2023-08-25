function vertMirror(strng) {
  let sep = strng.split("\n")
  let reverse = []
  for(let i = 0;i<sep.length;i++){
    sep[i] = sep[i].split("").reverse().join("")
    reverse.push(sep[i])
  }
  return reverse.join("\n")
}
function horMirror(strng) {
  let count = 0
  let sep = strng.split("\n")
  let c = sep.length / 2
   for(let i = 0;i < c;i++){
     let temp = sep[i]
     sep[i] = sep[sep.length - (i + 1)]
     sep[sep.length - (i + 1)] = temp
   }
  return sep.join("\n")
}
function oper(fct, s) {
  return fct(s)
}