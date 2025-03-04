function operationTwoArrays(arr1,arr2, operation){
    return arr1.length != arr2.length ? "Length of both arrays are not equal!" : 
           operation === "multiplication" ? arr1.map((e,i)=>e * arr2[i]) :
           operation === "division" ? arr1.map((e,i)=>e / arr2[i]) : 
           operation === "addition" ? arr1.map((e,i)=>e + arr2[i]) :
            operation === "subtraction" ? arr1.map((e,i)=>e - arr2[i]) :
            "Invalid operation!"
}