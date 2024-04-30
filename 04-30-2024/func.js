function numObj(s){
    return s.map(a=>({[a]: String.fromCodePoint(a)}))
  }