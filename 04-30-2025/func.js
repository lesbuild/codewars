function remove (string) {
    let count = 0
    for(let i = 0;i<string.length;i++){
      if(string[i] === "!"){
        count++
      }
    }
    return string.replace(/!/g,"") + "!".repeat(count)
  }