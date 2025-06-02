function capitalsFirst(str){
	let words = str.split(' ');
  let uWords = words.filter(a=> {
    return a.charAt(0).match(/[A-Z]/)
  });
  let lWords = words.filter(b=> {
    return b.charAt(0).match(/[a-z]/)
  });
  return uWords.concat(lWords).join(' ');
}