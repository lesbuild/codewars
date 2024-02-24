function insertDash(num) {
    num = num.toString().split('')
      for(let i = 0; i < num.length; i++){
        if (num[i]%2 == 1 && num[i +1]%2 == 1){
          num[i] = num[i] + '-'
        }
      }
      return num.join('')
    }