var cubeChecker = function(volume, side){
    return Math.cbrt(volume) == side  && side > 0 ? true : false
  };