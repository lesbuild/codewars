function spaceError(str) {
   str =  str.trimEnd()
    let count = 0
   for(let i = 0;i<str.length;i++){
       if(str[i] == " " && str[i + 1] == " "){
           count++
       }
   }
    return count
}
// Count extra spaces between words and don't count spaces at the beginning or end