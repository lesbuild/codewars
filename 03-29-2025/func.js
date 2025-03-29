function moreZeros(s){
    let bin = s.split("").map(a=>a.codePointAt(0)).map(b=>b.toString(2))
    let more = new Array
    for(let i = 0 ;i<bin.length;i++){
      if(bin[i].split("").filter(a=>a==="0").length >  bin[i].split("").filter(a=>a==="1").length && !more.includes(s[i])){
        more.push(s[i])
      }
    }
    return more
  }