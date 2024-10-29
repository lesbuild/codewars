function solve(s, k){
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    for (let i=0; i<alpha.length; i+=1) {
      while(s.includes(alpha[i]) && k > 0) {
        s = s.replace(alpha[i], "")
        k -= 1
      }
    }
    return s
  }