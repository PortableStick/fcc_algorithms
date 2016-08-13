/*
	Find the missing letter in the passed letter range and return it.

	If all letters are present in the range, return undefined.
*/


function fearNotLetter(str) {
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	var index = alphabet.indexOf(str[0]);
	for(var i = 0; i < str.length; i++){
		if(alphabet[index + i] != str[i]){
			//RETURN missing character here
			 return alphabet[index + i];
		} 
	}
  return undefined;
}

fearNotLetter('abce');