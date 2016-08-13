/**************************
Return an English translated sentence of the passed binary string.
**************************/

function binaryAgent(str) {

	//Split string into an array of bytes (as strings)
	//Iterate through the array 
		//change each byte into character code (an integer)
			//iterate though each byte
		//change each character code into a character
		//push into a new array
	//Join new array and return as string
	str = str.split(" ");

	var tmpArray = [];

	for(var i = 0; i < str.length; i++){
		var num = 0;
		for(var j = str[i].length; j > 0; j--){
			num += (str[i][j - 1] * Math.pow(2, str[i].length - j));
		}
		tmpArray.push(num);
	}

	var tmpStr = [];

	for(var i = 0; i < tmpArray.length; i++){
		tmpStr.push(String.fromCharCode(tmpArray[i]));
	}

	str = tmpStr.join("");
 	return str;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');