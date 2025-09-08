function popTheBalloon(str){
    return `Picture ${str} ${str.split("").filter(a=>a == "o").length} balloons been pop becomes ${str.replaceAll("o","x")}`
}
// Count ballons that can be pop and cross it out

// Example:

// ("ooo---ooo") => Picture "ooo---ooo" 6 balloons been pop becomes "xxx---xxx"