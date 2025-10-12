function getMatrix(number) {
  let m = []
  for(let i = 0;i<number;i++){
    let temp = []
    for(let j = 0;j<number;j++){
      if(i == j){
        temp.push(1)
      }
      else{
        temp.push(0)
      }
    }
    m.push(temp)
  }
  return m
} 
// Description:
// Create an identity matrix of the specified size ( >= 0 ).

// Some examples:

// (1)  =>  [[1]]

// (2) => [ [1,0],
//          [0,1] ]

//        [ [1,0,0,0,0],
//          [0,1,0,0,0],
// (5) =>   [0,0,1,0,0],
//          [0,0,0,1,0],
//          [0,0,0,0,1] ]   