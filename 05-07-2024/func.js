function well(x){
    let count = x.flat().filter(a=>/[^0-9]/g.test(a)).filter(a=>a.toLowerCase() == "good").length
    return count == 0 ? "Fail!" : count > 2 ? "I smell a series!" : "Publish!"
  }