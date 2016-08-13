function sym() {
  var args = [];
  for(var i = 0; i < arguments.length; i++){
    // console.log("arguments[" + i + "] is " + arguments[i]);
    args.push(arguments[i]);
  }
  return args.reduce(function(prev,curr){

    return makeDiff(prev,curr);
  }, [])
  
}

function makeDiff(arr1, arr2){
  var newArr = [];
  arr1.map(function(x){
    if(arr2.indexOf(x) === -1){
      newArr.push(x);
    }
  })
  arr2.map(function(x){
    if(arr1.indexOf(x) === -1){
      newArr.push(x);
    }
  })
  // console.log(newArr);
  return newArr;
}


// console.log(makeDiff([1, 2, 3], [5, 2, 1, 4]));
// console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));

