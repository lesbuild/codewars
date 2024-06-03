function evenLast(numbers) {
    if(numbers == ""){
      return 0
    }
    else{
      var total = 0
      for(let i = 0;i<numbers.length;i++){
        if(i % 2 === 0 || i == 0){
          total += numbers[i]
        }
        if (i == numbers.length - 1){
          total *= numbers[i]
        }
      }
      return total
    }
  }