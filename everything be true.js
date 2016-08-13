/**************************
Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument).

For this, check to see if the property defined in the second argument is present on every element of the collection.

Remember, you can access object properties through either dot notation or [] notation.
**************************/


function every(collection, pre) {
  // Run the array through a for loop
  	//check to see if each object hasOwnProperty of 'sex'
  		//return false if not
  	//check to see if defined
  		//return true, else return false

  for(var i = 0; i < collection.length; i++){
  	if(collection[i].hasOwnProperty(pre) === false || typeof collection[i][pre] === undefined){
  		return false;
  	} 
  }
  
  return true;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
