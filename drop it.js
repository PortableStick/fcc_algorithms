/**************************
Drop the elements of an array (first argument), 
starting from the front, until the predicate (second argument) returns true.
**************************/


function drop(arr, func) {
  // Drop them elements.
  while(func(arr[0]) === false && arr[0] !== undefined){
  	arr.shift();
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
