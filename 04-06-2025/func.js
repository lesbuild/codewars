function findOddNames(list) {
    let g = []
    for(let i = 0;i<list.length;i++){
      if(list[i].firstName.split("").map(a=>a.charCodeAt(0)).reduce((b,c)=>b+c,0) % 2 == 1)
          g.push(list[i])
        }
    return g
  }