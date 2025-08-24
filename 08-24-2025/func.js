function directionSignal(str){
    return str.match(/>/g) ? `Going right at index ${str.indexOf(">")}` : 
                             `Going left at index ${str.indexOf("<")}`
}
// Find out which direction the line is going and find the index of it