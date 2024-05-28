function wordSearch(query, seq){
    var reg = new RegExp(query,"i");
    var res = seq.filter(function(val){
      return reg.test(val);
    });
    return (res.length > 0) ? res : ["Empty"];
  }