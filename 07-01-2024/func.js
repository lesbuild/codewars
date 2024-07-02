const swap = str => {
    return str.length >= 2
      ? str.slice(-1) + str.slice(1, -1) + str.slice(0, 1)
      : str;
  };
  
  const translateWord = word => {
    const initial = word.match(/^\d+/)[0];
    const rest = word.replace(/^\d+/, '');
  
    return `${String.fromCharCode(initial)}${swap(rest)}`;
  };
  
  const decipherThis = str => {
    return str.split(' ')
      .map(word => translateWord(word))
      .join(' ');
  };