/**************PLAN**************
Find the smallest number that is evenly divisible by all numbers in the provided range.

The range will be an array of two numbers that will not necessarily be in numerical order.
********************************/

//Sort the array from lowest to highest
//repopulate the array with all numbers in the range

function LCM(A)  {   
    var n = A.length, a = Math.abs(A[0]);
    for (var i = 1; i < n; i++){ 
    	var b = Math.abs(A[i]), c = a;
       	while (a && b){ 
       		if(a > b){
       			a = a % b;
       		} else {
       			b = b % a;
       		}
       	} 
       	a = Math.abs(c*A[i])/(a+b);
     }
    return a;
}

function smallestCommons(arr) {
	arr = arr.sort(function(a,b){return a - b});
	var newArr = [];
	for(var i = arr[0]; i <= arr[1];i++){
		newArr.push(i);
	}
	return LCM(newArr);

}



smallestCommons([1,5]);
//1,2,3,4,5


