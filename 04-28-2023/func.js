var number = function(busStops){
    let numPpl = 0
    for(let i = 0; i < busStops.length; i++){
       numPpl += busStops[i][0]
       numPpl -= busStops[i][1]
    }
    return numPpl
  }