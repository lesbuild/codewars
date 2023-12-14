function stantonMeasure(array){
    return array.filter(a=>a==array.filter(a=>a==1).length).length
  }