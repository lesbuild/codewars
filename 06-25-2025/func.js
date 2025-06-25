function gimmeTheLetters(sp) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  alpha += alpha.toUpperCase();
  return alpha.slice(alpha.indexOf(sp[0]), alpha.indexOf(sp[2]) + 1);
}