
function sumMix(x){
    let newArr = x.map(Number)
    return newArr.reduce((accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  }