function validateCode (code) {
    let check = Number(code.toString()[0])
   return  check == 1 || check == 2 || check == 3 ? true : false
  }