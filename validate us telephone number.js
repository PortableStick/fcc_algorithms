function telephoneCheck(str) {
  // Good luck!
  var phoneMatch = new RegExp(/\b(\+1\-)?(1\s)?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}\b/);
  if(phoneMatch.exec(str)[0] === str){
    return true;
  } else {
    return false;
  }
}
  



telephoneCheck("555-555-5555");

