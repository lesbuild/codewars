function nextLetter(str) {
 return str.replace(/[a-z]/gi, function(r){
       if(r == "Z"){
         return "A"
       }
       else if(r == "z"){
         return "a"
       }
       else{
          return String.fromCharCode(r.charCodeAt(0) +1);
        }   
    });
}
// Description:
// Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).

// Notes:

// Spaces and special characters should remain the same.
// Capital letters should transfer in the same way but remain capitilized.
// Examples
// "Hello"               -->  "Ifmmp"
// "What is your name?"  -->  "Xibu jt zpvs obnf?"
// "zoo"                 -->  "app"
// "zzZAaa"              -->  "aaABbb"