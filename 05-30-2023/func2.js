function removeUrlAnchor(url){
    if(url.includes("#")){
       let newUrl = url.split("#")
       return newUrl[0]
       }
    else{
      return url
    }
    
    
    
  }