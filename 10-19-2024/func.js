// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){
    return names.sort(function(first, second) {
      return first.toLowerCase().localeCompare(second.toLowerCase())
    })
  }