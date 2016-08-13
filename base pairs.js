function pair(str) {
	//Split the string into an array of single letters
	//Match each letter with its base pair
		//T - A, G - C
	str = str.toUpperCase();
	str = str.split("");

	var ray = [];

	for(var i = 0; i < str.length; i++){
		ray[i]= [str[i]];
    
		switch(ray[i][0]){
			case 'A':
				ray[i].push('T');
				break;
			case 'T':
				ray[i].push('A');
				break;
			case 'G':
				ray[i].push('C');
				break;
			case 'C':
				ray[i].push('G');
				break;
		}
	}
	

 return ray;
}



pair("GCG");


