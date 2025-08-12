function area(d,l){
  return d <= l ? "Not a rectangle" :
         Math.round((l * Math.sqrt(Math.pow(d,2)-Math.pow(l,2))) * 100) / 100
}