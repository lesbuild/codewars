function checkThreeAndTwo(array) {
    var aCount = 0, bCount = 0, cCount = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === 'a') {
        aCount++;
      } else if (array[i] === 'b') {
        bCount++;
      } else if (array[i] === 'c') {
        cCount++;
      }
    }
    return (aCount == 2 || bCount == 2 || cCount == 2) && (aCount == 3 || bCount == 3 || cCount == 3);
  }