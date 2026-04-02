function sectionalProduct(arr){
    return arr.filter((a,i)=>i%2==0).reduce((a,b)=>a*b,1) + arr.filter((a,i)=>i%2==1).reduce((a,b)=>a*b,1)
}

// Description:

// Section the array according to the array index by odd and event, multiply then add together.

// sectionalProduct([1,2,3])=>5