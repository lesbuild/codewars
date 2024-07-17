function trim(str, size) {
    return str.length <= size ? str : size <= 3 && str.length > size ? str.slice(0,size) + "..." :
          str.slice(0, size - 3) + "..."
  }