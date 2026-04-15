function findTreasure(str) {
    return str.includes("x") ? `Found treasure at index ${str.indexOf("x")}` : "Treasure not found";
}

// Description: This function takes a string as input and checks if it contains the character "x". If it does, it returns a message indicating the index of the first occurrence of "x". If it does not, it returns a message stating that the treasure was not found.