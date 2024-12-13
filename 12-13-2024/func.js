function encrypt(text, n) {
    if(text == null || n < 0){
      return text
    }
    for(let i = 0;i<n;i++){
     let odd = "";
     let even = "";
      for(let j = 0;j<text.length;j++){
        if(j % 2 == 1){
          odd += text[j];
        }
        else{
          even += text[j];
      }
      }
      text = odd + even
    }
      return text
  }
  
  function decrypt(en, n) {
    if(en == null || n < 0){
      return en
    }
    
    for(let z = 0;z < n;z++){
      let right = en.substring(0,Math.floor(en.length/2));
      let left = en.substring(Math.floor(en.length/2));
      let i = 0;
      let j = 0;
      let merge = ""
      while(i < left.length || j < right.length){
        if(i < left.length){
          merge += left[i];
          i++;
        }
        if(j < right.length){
          merge += right[j];
          j++;
        }
      }
      en = merge
    }
    return en
  }