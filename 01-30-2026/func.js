function battleOfHalves(arr){
    let firstHalf = arr.slice(0,arr.length/2).reduce((a,b)=>a+b)
    let secondHalf = arr.slice(arr.length/2).reduce((c,d)=>c+d)
    return firstHalf > secondHalf ? "Triumph to the lower half!" : firstHalf < secondHalf ?
                                    "Triumph tot he higher half!" : "I'ts a draw!"
}