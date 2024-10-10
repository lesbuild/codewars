function solve(a){
    return a.filter(e=>e % 2 ==0).length - a.filter(e=>e % 2 == 1).length
  };