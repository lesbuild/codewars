function rakeGarden(garden) {
    return garden.split(" ").map(a=>a != "rock" ? "gravel" : "rock").join(" ")
  }