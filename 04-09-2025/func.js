function total(arr){
    let primeSum = 0
    function isPrime(num){
      if (num <= 1){
        return false
      }
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
          if (num % i === 0){
            return false
          }
      }
      return true;
    }
    for(let i = 2 ;i<arr.length;i++){
      if(isPrime(i)){
        primeSum += arr[i]
      }
    }
    return primeSum
  }