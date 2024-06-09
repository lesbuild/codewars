function nthChar(words){
    return words == "" ? "" : words.map((a,b)=>a[b]).join("")
   }