function blackAndWhite(arr){
    return Array.isArray(arr) && arr.includes(5) && arr.includes(13) ? "It's a black array" : 
            Array.isArray(arr) == false ? "It's a fake array" : "It's a white array"
  }