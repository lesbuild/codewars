function counterEffect(str) {
	var output = [];
	for (var i = 0; i < str.length; i++) {
		var temp = [];
		for (var j = 0; j <= Number(str[i]); j++) {
			temp.push(j);
		} output.push(temp);
	} return output;
}