function sayPlease(arr) {
    return arr.map(a=>a.includes("?") ? a.replace("?", ", please?") : a)
}

// Description:

// If you will ask something say please at the end, right?

// Given an array of sentences, make a remark at the end to say please.

// Example:

// sayPlease(["Can you grab me the plate?", "May I have this dance?"]) => ["Can you grab me a plate, Please?", "May I have this dance, please?"]

// Notes:

// All string are sentences but not all are asking a question.