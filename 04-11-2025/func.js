function findNextPower(val, pow_) {
    for(let i = 1;i<val;i++){
        if(Math.pow(i,pow_) > val){
            return Math.pow(i,pow_)
        }
    }
}
//easier to understand solution
function findNextPower(val, pow_) {
    let num = 1
    if(val == 1){
      return Math.pow(2,pow_)
    }
      while(val >= num){
        let temp = Math.pow(num,pow_)
        if(val >= temp){
          num++
        }
        else{
          num = temp
        }
      }
    return num
  }