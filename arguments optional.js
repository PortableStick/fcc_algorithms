/**************************
Create a function that sums two arguments together. If only one argument is provided, return a function that expects one additional argument and will return the sum.

For example, add(2, 3) should return 5, and add(2) should return a function that is waiting for an argument so that var sum2And = add(2); return sum2And(3); // 5

If either argument isn't a valid number, return undefined.
**************************/

//check to see if arguments.length is 1
	//return function that expects the other argument to sum
//if it's 2, and they are both numbers, return the sum of the arguments
//under any other conditions, return undefined

function add() {
  if(arguments.length === 1 && typeof arguments[0] === "number"){
  	var a = arguments[0];
  	return function(b){
  		if(isNaN(b) || Array.isArray(b)){
  			return undefined;
  		}
  		return a + b;
  	};
  } else{
  	for(var i = 0; i < arguments.length; i++){
  		if(i === 2 || typeof arguments[i] !== "number"){
  			return undefined;
  		}
  	}
  }

  return arguments[0] + arguments[1];
 
}

add(2,3);
