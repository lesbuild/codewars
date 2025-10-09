function expandedForm(num) {
  num = num.toString().split("").reverse().join("")
  let z = ""
  let xpand = []
  for(let i = 0;i<num.length;i++){
    if(num[i] != 0){
      xpand.push((num[i] + z))
    }
    z += "0"
  }
  return xpand.reverse().join(" + ")
}
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.