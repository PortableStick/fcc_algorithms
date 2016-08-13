function telephoneCheck(str) {
  // Good luck!
  var phoneMatch = /^(?:1\s?)?(?:\(\d{3}\))?(?:\d{3})?[\s|\-]?\d{3}(?:[\-|\s])?\d{4}/;

   if(str.match(phoneMatch)){
     return true;
   } else {
     return false;
   }

}

console.log(telephoneCheck("555)555-5555"));