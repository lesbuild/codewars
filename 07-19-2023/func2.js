function uniTotal (string) {
    // total up dem unicodes!
      let total = 0
      for(let i =0;i < string.length;i++){
        total += string.charCodeAt(i)
      }
      return total
    }