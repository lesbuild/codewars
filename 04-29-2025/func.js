function duplicateElements(m, n) {
    for(let i = 0;i<m.length;i++){
      if(n.includes(m[i])){
        return true
      }
    }
  return false
}

function duplicateElements(m, n) {
    return m.some(e=>n.includes(e))
}