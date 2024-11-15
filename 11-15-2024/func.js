function count(string) {
    let count = {};
    for(let char of string){
      count[char] = (count[char] || 0) + 1;
    }
    return count;
  }