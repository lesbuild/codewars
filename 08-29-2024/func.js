function driver(data) {
    var birthDay = new Date(data[3]);
    
    return (data[2].toUpperCase()+"99999").slice(0,5)                              //1-5
            +  data[3].slice(-2,-1)                                                //6
            +  ("0"+(birthDay.getMonth() + (data[4] == "M" ? 1 : 51))).slice(-2)   //7-8
            +  ("0"+birthDay.getDate()).slice(-2)                                  //9-10
            +  data[3].slice(-1)                                                   //11
            +  data[0].slice(0,1)+(data[1]+"9").slice(0,1)                         //12-13
            +  "9AA";                                                              //14-16
  }