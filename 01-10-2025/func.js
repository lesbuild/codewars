function mirror(text){
    let arr = text.split(" ")
    let mirrorImg = ""
    let maxStrLength = Math.max(...arr.map(str => str.length));
    let topBot = "*".repeat(maxStrLength + 4)
    for(let i = 0 ;i<arr.length;i++){
      mirrorImg += `* ${arr[i].split("").reverse().join("").padEnd(maxStrLength, " ")} *\n`
    }
  return topBot + "\n" + mirrorImg + topBot
}