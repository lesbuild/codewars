function evenMultiplier(arr, num) {
    return arr.map((x,i) => i % 2 === 0 ? x * num : x);
}

// Description:

// Given an array of numbers and a number, return an array where every even indexed element is multiplied by the given number.