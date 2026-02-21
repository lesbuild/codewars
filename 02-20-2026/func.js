function type(value) {
  return Array.isArray(value) ? "array" :
  value instanceof Date ? "date" :
  value === null ? "null" : typeof value
}
// Create a function to return true type of variable, i.e.

// type([]) == 'array'
// type({}) == 'object'
// type('') == 'string'
// type(NaN) == 'number'