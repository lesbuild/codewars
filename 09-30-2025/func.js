function thirdEyeBlind(array) {
    return array.map((e,i)=>i % 3 == 0 && i != 0 ? "X" : e)
}

// Make every third index "X"