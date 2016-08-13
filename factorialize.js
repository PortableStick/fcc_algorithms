function fact(num){
	var tmpVar = 1;
	for(var i = num; i > 0; i--){
		tmpVar *= i;
	}
	return tmpVar;
}

console.log(fact(7)-(fact(5)*2));