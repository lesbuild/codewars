function isPythagoreanTriple(integers) {
    // Good luck friends!
    integers = integers.sort((a,b)=>a-b)
    for(let i = 0; i < integers.length;i++){
      integers[i] = Math.pow(integers[i], 2)
    }
    return integers[0] + integers[1] == integers[2]
  }