function heggeleggleggo(word){
  let conso = "bcdfghjklmnpqrstvwxyz"
  return word.split("").map(a=>conso.includes(a.toLowerCase()) ? a + "egg" : a).join("")
}
// Description:
// Egg Talk.

// Insert an egg after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.

// Example
// hello => heggeleggleggo

// eggs => egegggeggsegg

// FUN KATA => FeggUNegg KeggATeggA

let heggeleggleggo = word => word.replace(/([^aeiou ])/gi, "$1egg"); // Another solution