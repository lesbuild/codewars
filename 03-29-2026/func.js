function getConsectiveItems(items, key) {
  items = items.toString();
  key = key.toString();
  let highest = 0;
  let temp = 0;
  for (let c of items) {
    temp = c == key ? temp + 1 : 0;
    if (temp > highest)
      highest = temp;
  }
  return highest;
}
// Description:
// I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

// Notes:

// The items and the key will be either an integer or a string (consisting of letters only)
// If the key does not appear in the items, return 0
// Examples
// 90000, 0           -->  4
// "abcdaaadse", "a"  -->  3
// "abcdaaadse", "z"  -->  0