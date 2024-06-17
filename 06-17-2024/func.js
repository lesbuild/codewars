var AmIAfraid = function(day, num){
    return day == "Monday" && num == 12 ? true : day == "Tuesday" && num > 95 ? true :
           day == "Wednesday" && num == 34 ? true : day == "Thursday" && num == 0 ? true :
           day == "Friday" && num % 2 == 0 ? true : day == "Saturday" && num == 56 ? true :
           day == "Sunday" && (num == 666 || num == -666)
  }