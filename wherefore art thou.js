function checkProperties(target, source) {
    for (var prop in source){
        if(!target.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true;
}

function checkValues(target, source) {
    for (var prop in source) {
      if(target[prop] !== source[prop]) {
        return false;
      }
    }
    return true;
}

function whatIsInAName(collection, source) {
  // What's in a name?
  //Cycle through collection
  //Check that properties from source exist
  //Check that properties have same value
  //Add to arr if true

  return collection.filter(function(obj) {
    return checkProperties(obj, source) && checkValues(obj, source);
  });
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });