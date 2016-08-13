/**************************
Flatten a nested array. You must account for varying levels of nesting.
**************************/

//Run through the given array checking to see if each item is an array
//If it is an array, run it through another loop to check if each item is an array
//repeat until non-array element is found, then add it to a new array

function steamroller(arr) {
  // I'm a steamroller, baby
 	var tmpArray = [];
 	traverse(arr, tmpArray);
 	return tmpArray;
}

function traverse(arr, tmpArray){
	
	for (var i = 0; i < arr.length; i++) {
 		if(Array.isArray(arr[i])){
 			//Go deeper
 			traverse(arr[i], tmpArray);
 		} else{
 			//Use this value
 			tmpArray.push(arr[i]);
 		}
 	}
 	
}


steamroller([1, [2], [3, [[4]]]]);


