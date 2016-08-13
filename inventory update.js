function inventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
   arr2.map(function(x){
   	for(var i = 0; i < arr1.length; i++){
   		if(arr1[i][1] === x[1]){
   			arr1[i][0] += x[0];
   			break;
   		}
   	}
   	for(var i = 0; i < arr1.length; i++){
   		if(arr1[i][1] === x[1]){
   			return;
   		}
   	}
   	arr1.push(x);
   });
   arr1 = arr1.sort(function(a, b){
   	if(a[1] > b[1]){
   		return 1;
   	} else if (b[1] > a[1]) {
   		return -1;
   	} else {
   		return 0;
   	}
   });
  return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

// console.log(inventory(curInv, newInv));

// console.log(inventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
console.log(inventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]));