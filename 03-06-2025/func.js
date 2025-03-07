function scrambleName(first, last){
    let combine = first + last
    let scramble = []
    for(let i = 0;i< combine.length;i++){
      if(i % 2 == 0){
        scramble += combine[i]
      }
      else{
        scramble += combine[combine.length - 1 - i]
      }
    }
    return scramble
}
