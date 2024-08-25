function sortVowels(s){
    return s === s + [] ? [...s].map(el => el.match(/[aeiou]/i) ? `|${el}` : `${el}|`).join('\n') : ''
  }