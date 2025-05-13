function lottery(str){
   return !str.match(/[0-9]/g) ? "One more run!" : [...new Set(str.match(/[0-9]/g))].join("")
}