function automorphic(n){
    let strNum = n.toString()
    let sqrd = Math.pow(n,2).toString()
    return sqrd.includes(strNum) ? "Automorphic" : "Not!!"
  }