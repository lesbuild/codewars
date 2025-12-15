function insideOut(x){
  return x.split(" ").map(a=>a.length % 2 == 1 && a.length > 3 ? 
                               a.substring(0,a.length/2).split("").reverse().join("") + a.substring(a.length/2,a.length/2+1) + a.substring(a.length/2 +1).split("").reverse().join("") : a.length % 2 == 0 ?
                               a.substring(0,a.length/2).split("").reverse().join("") + a.substring(a.length/2).split("").reverse().join("") : a).join(" ")
}
// Description:
// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

function insideOut(x){
  return x.split(' ').map(e => {    
    let left = e.substring(0, Math.floor(e.length / 2)).split('').reverse().join('')
    let right = e.substring(Math.ceil(e.length / 2)).split('').reverse().join('')
    let middle = e[Math.floor(e.length / 2)]    
    return e.length % 2 ? left + middle + right : left + right
  }).join(' ')
}