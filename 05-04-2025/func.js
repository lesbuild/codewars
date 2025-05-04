function changeMe(moneyIn){
    return moneyIn === "£5" ? "20p ".repeat(25).trimEnd() :
           moneyIn === "£2" ? "20p ".repeat(10).trimEnd() :
           moneyIn === "£1" ? "20p ".repeat(5).trimEnd()  :
           moneyIn === "50p" ? "20p 20p 10p"              :
           moneyIn === "20p" ? "10p 10p"                  : moneyIn
  }