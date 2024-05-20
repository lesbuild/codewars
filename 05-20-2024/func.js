//return the total number of smiling faces in the array
function countSmileys(arr) {
    let smileArr = [";)",":)", ";-)",":-D", ";-D",":-)",";-)", ":~)",";~)",":~D", ";~D",":D",";D"]
    let count = 0
    for(let i = 0;i<arr.length;i++){
      if(smileArr.includes(arr[i])){
        count++
      }
    }
    return count
  }