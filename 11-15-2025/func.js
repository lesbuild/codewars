function takeAndAdd(arr,targetNum,targetIdx){
    arr.splice(targetIdx,1,targetNum+arr[targetIdx]);
    arr.splice(arr.indexOf(targetNum),1,0);
    return arr
}
// Description:

// Find the target number, add it to the number in the given index

// then make the previous number zero because the number is been transfer already.

// takeAndAdd([12,3,4],3,2) => [12,0,7]