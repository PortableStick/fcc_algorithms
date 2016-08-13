/**************************
Convert the characters "&", "<", ">", ' " ', and " ' ", in a string to their corresponding HTML entities.
**************************/


function convert(str) {
  // &colon;&rpar;
  //Define a regex pattern that looks for the above characters
  //run a string.replace function which will take the regex object and replace the characters with their HTML counterparts

  str = str.replace(/[\&\>\"\'\<]+/g, function(){
      for(var i = 0; i < arguments.length; i++){
        switch(arguments[i]){
          case '&':
            return "&amp;";
          case '>':
            return "&#62;";
          case '<':
            return "&#60;";
          case "'":
            return "&#39;";
          case '"':
            return "&#34;";           
        }
      }
    
  });

  return str;
}

convert("<");
