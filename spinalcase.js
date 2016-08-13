function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
   //Split the string into an array
  //iterate through the array and add a space before every uppercase letter
  str = str.replace(/[\_\-]/g, " ");
  str = str.split("");
  
  console.log(str);
  for(var i = 0; i < str.length; i++){
    if(i > 0 && str[i] !== " " && str[i - 1] !== " " && str[i] === str[i].toUpperCase()){
      str.splice(i, 0, " ");
      i++;
    }
  }

  str = str.join("");
  
  str = str.toLowerCase();
 
  str = str.replace(/[\s]/g, "-");
  
  return str;
}

spinalCase('thisIsSpinalTap');


