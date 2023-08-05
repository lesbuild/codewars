function maxDiff(list) {
    list = list.sort((a,b)=>a-b)
    return list.length < 2 ? 0 : list[list.length-1] - list[0]
  };