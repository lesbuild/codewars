function arrowPointing(str){
    return str.includes(">") && str.includes("<") ? `The -> arrow is pointing at index ${str.indexOf(">") + 1} and <- arrow is pointing at ${str.indexOf("<") - 1}` :
            str.includes(">") ? `The -> arrow is pointing at index ${str.indexOf(">") + 1}` :  `<- arrow is pointing at ${str.indexOf("<") - 1}`
}
// Show where the arrow['s] is pointing
// Arrow is always pointing somewhere
// Example:
// " <--------> " would return The -> arrow is pointing at index 11 and <- arrow is pointing at 0