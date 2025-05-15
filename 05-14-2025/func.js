function avgArray(arr) {
  var totalArr=[];
  for(let i in arr[0]){
    var num=0;
    for(let j in arr){
      num+=arr[j][i];
    }
    totalArr.push(num/arr.length);
  }
  return totalArr;
}