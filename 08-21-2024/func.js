function countWords(str) {
    return str.split(/\s/).filter(e => {
       return e
     }).length 
   }