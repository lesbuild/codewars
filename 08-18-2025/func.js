function diagonal(matrix){
  let principal = 0;
  let secondary = 0;
  
  for(let i = 0;i<matrix.length;i++){
    for(let j = 0;j<matrix[i].length;j++){
      if(i == j){
        principal += matrix[i][j];
      }
      if(j == matrix.length - 1 - i){
        secondary += matrix[i][j];
      }
    }
  }
  return principal > secondary ? 'Principal Diagonal win!' : principal < secondary ? 'Secondary Diagonal win!' : "Draw!"
}