function whoseBicycle(diary1, diary2, diary3) {
    const reducer = (acc, mark) => acc + mark;
    const marks = [diary1, diary2, diary3]
      .map(diary => Object.values(diary).reduce(reducer, 0));
    let maxIdx = 0;
    let maxMarks = 0;
    const ages = Object.values(ageTable);
    marks.forEach((curMarks, curIdx) => {
      if (curMarks > maxMarks ||
         (curMarks === maxMarks && ages[curIdx] < ages[maxIdx])) {
        maxIdx = curIdx;
        maxMarks = curMarks;
      }
    });
    return `I need to buy a bicycle for my ${['first', 'second', 'third'][maxIdx]} son.`;
  }