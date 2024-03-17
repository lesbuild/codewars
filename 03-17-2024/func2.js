function save(sizes, hd) {
    let count = 0
    let cap = 0
    while(cap < hd){
      cap += sizes[count]
      if(cap <= hd || sizes[count == 0]){
         count += 1
      }
    }
    return count
  }