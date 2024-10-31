var howManyYears = function(date1, date2){
    date1 = +date1.split("/")[0]
    date2 = +date2.split("/")[0]
    return date2 > date1 ? date2 - date1 : date1 - date2
  }