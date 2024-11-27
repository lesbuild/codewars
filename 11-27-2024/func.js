function dominator(arr) {
    for(let i=0, numObj={}; i<arr.length; i++){
        numObj[arr[i]] = numObj[arr[i]]+1||1
        if(numObj[arr[i]]>arr.length/2)
        return arr[i];
    }return -1 
  }