function createArrayOfTiers(num) {
    num = num.toString()
    let arr = []
    let str = ""
    for(let i = 0;i<num.length;i++){
      str += num[i]
      arr.push(str)
    }
  return arr
}