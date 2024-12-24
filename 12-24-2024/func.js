function testResult(array) {
    let avg = Math.round((array.reduce((a,b)=>a+b) / array.length) * 1000) / 1000  
    let mark = {h:0, a:0, l:0}
    for(let i = 0;i<array.length;i++){
      if(array[i] < 7){
        mark.l += 1
      }
      else if(array[i] < 9){
        mark.a += 1
      }
      else{
        mark.h += 1
      }
    }
    return mark.a == 0 && mark.l == 0 ? [avg, mark, "They did well"] : [avg,mark]
  }