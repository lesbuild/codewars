function happySmiles(arr) {
    let smiles = [":)", ";)", ":-)", ";-)", ":D", ";D", ":-D", ";-D"]
        return arr.some(a=>smiles.includes(a)) ? arr.filter(b=>smiles.includes(b)).length : "No smiles found :("
}

// Description: Given an array of strings, return the total number of smiling faces in the array. The smiley faces can be made up of the following characters:
// - Eyes: `:` or `;`
// - Nose: `-` (optional)
// - Mouth: `)` or `D`

// Example:

// happySmiles[":2",":(",";-<",";-)"]=> 1
// happySmiles[":)",":D",";-D",":-D"]=> 4
// happySmiles[":)",":(",":D",":O"]=> 2
// happySmiles[":(",":O",":-(",":/"]=> 0