var capitals = function (word) {
	let Arr = word.split("")
  let ArrNum = []
   for(let i = 0; i < Arr.length; i++){
    if( Arr[i] === Arr[i].toUpperCase()){
      ArrNum.push(i) 
    }
   }
     return ArrNum
}