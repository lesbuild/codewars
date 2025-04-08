function bitsBattle(numbers) {
    if(numbers.length == 0 || numbers[0] == 0){
      return "tie"
    }
    let even = numbers.filter(a=>a % 2 === 0).map(b=>b.toString(2)).join("").split("").filter(b=>b==0).length
    let odd = numbers.filter(b=>b % 2 === 1).map(b=>b.toString(2)).join("").split("").filter(b=>b==1).length
    return even > odd ? "evens win" : even < odd ? "odds win" : "tie"
  }