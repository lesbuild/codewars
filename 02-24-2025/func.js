function encode(str) 
{
  let code = "GADERYPOLUKIgaderypoluki"
  let encrypt = "AGEDYROPULIKagedyropulik"
  let coded = ""
    for(let i = 0;i<str.length;i++){
      if(code.includes(str[i])){
        coded += encrypt[code.indexOf(str[i])]
      }
      else{
        coded += str[i]
      }
    }
  return coded
}

function decode(str) 
{
  return encode(str)   
}