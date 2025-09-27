function hexHash(code){
  return code == "" ? 0 : code.split("").map(a=>a.charCodeAt(0).toString("16")).join("").match(/[0-9]/g).reduce((a,b)=>Number(a)+Number(b),0)
}