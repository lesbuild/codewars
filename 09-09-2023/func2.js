function solve(s){
    let u = s.match(/[A-Z]/g)||[]
    let d = s.match(/[a-z]/g)||[]
    let n = s.match(/[0-9]/g)||[]
    let sp = s.match(/[^A-Z0-9]/gi)||[]
    return [u.length, d.length, n.length, sp.length]
  }