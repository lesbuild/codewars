function solution(pairs){
    var array = [];
    for (var pair in pairs){
      array.push((pair+' = '+pairs[pair]));
    }
    return array.join(',');
  }