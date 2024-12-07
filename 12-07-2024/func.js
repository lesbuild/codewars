function reverseByCenter(s){
    let half = Math.floor(s.length/2)
    return s.length% 2 == 0 ? [s.slice(0,half),s.slice(half)].reverse().join("") :
          [s.slice(0,half),s.slice(half,half+1),s.slice(half+1)].reverse().join("")
  }