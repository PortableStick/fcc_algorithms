/**************************
Find the smallest number that is evenly divisible by all numbers in the provided range.
**************************/

//sort the array to ensure ascending order
//create a new array with values in the range set by the given array
//go through each item in the array and factorialize 
	//if the array doesn't already contain the factor, add it
	//otherwise, discard
//once we have an array that is populated by the prime factors of each array item, iterate through and multiply together


function smallestCommons(arr) {
	arr = arr.sort(function(a,b){return a-b;});
	arr = createValuesFromRange(arr);


  return multiplyValuesTogether(arr);
}

function createValuesFromRange(arr){
	var tmpArray = [];
	for(var i = arr[0]; i <= arr[arr.length - 1]; i++){
		tmpArray.push(i);
	}

	return tmpArray;
}

function multiplyValuesTogether(arr){
	//create a product of the values in the array
	var product = 1;
	for (var i = arr[0]; i <= arr.length; i++) {
		product *= i;
	}

	return product;
}

function primeFactorization(num){
	

}

//1 * 2 * 3 * [2 * 2] * 5

//[2 * 2] * 5 * [2 * 3] * 7 * [2 * 2 * 2]

smallestCommons([1,5]);




