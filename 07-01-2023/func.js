function calculateTip(amount, rating) {
    return rating.toUpperCase() == "EXCELLENT" ? Math.ceil(amount * .2) :
           rating.toUpperCase() == "POOR" ? Math.ceil(amount * .05) :
           rating.toUpperCase() == "GOOD" ? Math.ceil(amount * .1)  :
           rating.toUpperCase() == "GREAT"? Math.ceil(amount * .15) : 
           rating.toUpperCase() == "TERRIBLE" ? 0 : "Rating not recognised" 
          
  }