var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let stringTotal = []
      let total = 0
      if(count <= 0){
        return count === 0 ? "0=0" : `${count}<0`
      }
      else{
        for(let i =0;i <= count ; i++){
          stringTotal.push(i)
          total += i
        }return stringTotal.join("+") + " = " + total
      }
      
    };
  
    return SequenceSum;
  
  })();