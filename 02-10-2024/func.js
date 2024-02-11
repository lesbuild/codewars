function jumpingNumber(n){
    let sArr = n.toString().split('')
    for(i=0; i < sArr.length-1; i++){
      if(Math.abs(sArr[i] - sArr[i+1]) !== 1 ){
        return 'Not!!'
      }
    }
    return 'Jumping!!'
  }