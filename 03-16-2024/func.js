function hydrate(s) {
    let num = s.match(/[0-9]/g).map(a=>parseInt(a)).reduce((a,b)=>a+b)
    return num > 1 ? `${num} glasses of water` : `${num} glass of water`
  }