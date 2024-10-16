function scrabbleScore(str){
    var score = 0;
    for (var i in str) {
      score += $dict[str[i].toUpperCase()] || 0;
    }
    return score;
  }