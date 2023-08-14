function maxTriSum(numbers){
    let unique = [];
      numbers.forEach(element => {
          if (!unique.includes(element)) {
              unique.push(element)
          }
      })
    unique =  unique.sort((a,b)=>a-b).slice(-3)
    return unique.reduce((a,b)=> a+b)
  }