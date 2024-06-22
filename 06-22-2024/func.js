function fizzBuzzCuckooClock(time) {
    let arr = time.split(":")
    let min = +arr[1]
    let hr = +arr[0]
    return min == 0 && (hr == 0 || hr == 12) ?  "Cuckoo ".repeat(12).trim() : min == 0 ?
      "Cuckoo ".repeat(arr[0] % 12).trim() : min == 30 ?
      "Cuckoo" : min % 5 == 0 && min % 3 == 0 ? "Fizz Buzz" : min % 5 == 0 ? "Buzz" : 
      min % 3 == 0  ? "Fizz" : "tick"
  }