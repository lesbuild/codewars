function sharedBits(a, b) {
  a = a.toString(2).padStart(8,"0").split("").reverse()
  b = b.toString(2).padStart(8,"0").split("").reverse()
  return a.map((e,i)=>+e + +b[i]).filter(a=>a==2).length > 1 
}