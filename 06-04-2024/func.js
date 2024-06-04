function uniqueSum(lst){
    return lst.filter((currentValue, index, arr) => (
          arr.indexOf(currentValue) === index
      )).reduce((a,b)=>a+b,null)
  }