const sentence = list =>
  list
    .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
    .map(item => Object.values(item)[0])
    .join(' ')
