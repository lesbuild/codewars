function justAverage(arr){
    return arr.every(a=>typeof a === "number") ? arr.reduce((a,b)=> a + b, 0) / arr.length : "There is an item that is not a number!"
}