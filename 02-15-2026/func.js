function sumItUp(arr){
    return arr.filter(a=>a%2==0).reduce((c,d)=>c*d,1) + arr.filter(b=>b%2==1).reduce((e,f)=>e+f)
}
// Decription:
 
// Separate odd and even in an array. 

// Multiply even numbers and sum odd numbers. 

// Sum the both odd and even 

// Example:

// sumItUp([3,2,5,1])=> (11)