function reject(array, predicate) {
    return array.filter(a=>!predicate(a))
}
// it takes an array and a function to reject