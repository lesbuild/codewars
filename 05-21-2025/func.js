function solve(stones) {
  let total = 0
  for (let i = 1; i <= stones.length; i++) {
    if (stones[i] === stones[i-1]){
      total++
    }
  }
  return total
}
// There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

// Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colors.