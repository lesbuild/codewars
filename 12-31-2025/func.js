function leapYear(year){
    return year % 4 == 0 ? "Leap Year!" : year % 100 == 0 && year % 400 ? "Leap Year!" :
           "Not a Leap Year!"
}