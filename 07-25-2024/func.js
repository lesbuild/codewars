function doubleEveryOther(a) {
    for(let i = 1;i<a.length;i++){
      if(i % 2 == 1){
        a[i] = a[i] * 2
      }
    }
    return a
  }