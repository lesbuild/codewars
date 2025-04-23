function determineTime (durations) {
    let hr = 0
    let min = 0
    let sec = 0
    for(let i = 0;i<durations.length;i++){
      let time = durations[i].split(":")
      hr += +time[0]
      min += +time[1]
      sec += +time[2]
      if(sec >= 60){
        sec %= 60
        min++
      }
      if(min >= 60){
        min %= 60
        hr++
      }
      if(hr > 24){
        return false
      }
    }
    return hr == 24 && min + sec > 0 ? false : true
  }