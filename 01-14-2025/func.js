function cutCube(volume,n){
    return Number.isInteger(Math.cbrt(volume)) && Number.isInteger(Math.cbrt(volume/n))
  }