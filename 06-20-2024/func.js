// Javascript: return multiples into an array
function multiples(s1,s2,s3){
    const arr = []
    for (let i = s1; i < s3; i++){
      if( i % s1 === 0 && i % s2 === 0 ){
        arr.push(i)
      }
    }
    return arr
  }