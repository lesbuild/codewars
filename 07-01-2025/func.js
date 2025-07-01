function redarr(arr) {
  let good = new Set(arr)
  good = [...good].sort()
  const channel = {}
  for(let i = 0;i<good.length;i++){
    channel[i] = good[i]
  }
  return channel
}

// Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function redarr(). Sort the channels in an alphabetical order, remove duplicates and, finally, return an object where each channel (object's value) is assigned to a whole number (objects's key), starting with 0.

// Examples:

// var arr = ["BBC1", "BBC2", "MTV"];

// redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}

// var arr = ["BBC1", "BBC1", "BBC2", "MTV"];

// redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}