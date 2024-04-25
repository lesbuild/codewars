function mean(lst){
    let num = lst.filter(a=>a.search(/[a-z]/g)).reduce((a,b)=>parseInt(a)+parseInt(b)) / 10
    let alpha = lst.join("").replace(/[0-9]/gi,"")
    return [num,alpha]
  }