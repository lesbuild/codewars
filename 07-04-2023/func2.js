function generateShape(integer){
    let star = ""
    for(let i =1;i <= integer;i++){
      for(let j=1;j <= integer;j++){
        star += "+"
      }
      if(i != integer){
        star += "\n"
      }
      
    }
    return star
  }
  