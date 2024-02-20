function aliasGen(f,l){
    let first = f[0].toUpperCase()
    let last = l[0].toUpperCase()
    return /[A-Z]/g.test(first) && /[A-Z]/g.test(last) ? 
           `${firstName[first]} ${surname[last]}` :
          'Your name must start with a letter from A - Z.'
  }