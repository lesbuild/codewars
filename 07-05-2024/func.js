function wordValue(a) {
    let val = "abcdefghijklmnopqrstuvwxyz"
    let totalArr = []
    for(let i = 0;i<a.length;i++){
      let total = 0
      for(let j = 0;j<a[i].length;j++){
        total += val.indexOf(a[i][j]) + 1
      }
      totalArr.push(total * (i + 1))
    }
    return totalArr
  }