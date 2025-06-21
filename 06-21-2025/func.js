function shadesOfGrey(n){
  if(n > 254){
    n = 254
  }
  let shade = []
  for(let i = 1;i<=n;i++){
    shade.push("#"+i.toString(16).padStart(2,0).repeat(3))
  }
  
  return n > 0 ? shade : []
}
// Make a number of grey in hexadecimal