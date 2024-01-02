function paintLetterboxes(start, end) {
    const frequencies = Array(10).fill(0);
    for(let number=start; number<=end; number++) {
      number.toString().split('').forEach(x => frequencies[x]++);
    }
    return frequencies;
  }