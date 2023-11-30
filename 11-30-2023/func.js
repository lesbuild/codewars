function lastSurvivor(letters, coords) {
    let newL = letters.split("")
    for(let i=0;i <coords.length;i++){
      newL.splice(coords[i], 1)
    }
    return newL.join("")
  }