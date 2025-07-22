function togetherOrder(str1,str2){
    let combine = (str1 + str2).split("")
    return [... new Set(combine.sort())] .join("")
}
// Take two string put them together, sort it and make sure letters are unique with no duplicates