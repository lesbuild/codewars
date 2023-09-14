String.prototype.digit = function() {
    if(this.length < 2 ){
     return /^\d+$/.test(this)
      }
    else{
      return false
    }
  };