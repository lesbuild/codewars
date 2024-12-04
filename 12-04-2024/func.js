const dataReverse = data => {
	const result = [];
	while(data.length){
		result.push(...data.splice(-8))
	}
	return result;
}