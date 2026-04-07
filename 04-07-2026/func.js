function spotTarget(arr,target){
    return arr.includes(target) ? `target num ${target} is found at index ${arr.indexOf(target)}`
                                : `target num ${target} is not in the array!`
}

// Description:

// Find the target number inside the Array. When the target number is inside the Array, specify the index location, otherwise, write "target num (target number) is not in the array!"


// Example:

// spotTarget([1,23,3,5],4)=> "target num 4 is not in the array!"

// spotTarget([1,23,3,5],23)=> "target num 23 is found at index 1."