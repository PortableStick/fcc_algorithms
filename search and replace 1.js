function replace(str, before, after) {
  after = after.split("");
  for(var i = 0; i < after.length; i++){
    if(before[i] !== undefined){
      if(before[i] === before[i].toUpperCase()){
        after[i] = after[i].toUpperCase();
      } else{
        after[i] = after[i].toLowerCase();
      }
    }
  }
  after = after.join("");
  str = str.replace(before, after);
 return str;
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

