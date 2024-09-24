function solve(arr){
    let sorted = arr.sort((a, b) => b-a);
    let response = [];
    for(let i = 0; i < sorted.length/2; i++){
      response.push(sorted[i]);
      if(i < sorted.length -i -1)
        response.push(sorted[sorted.length -i -1]);
    }
    return response;
};