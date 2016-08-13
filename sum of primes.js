/**************************
Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.
**************************/

//create a loop
	//loop will increment by 2 so we will only look at odd numbers
	//test each number for remainder of 0
		//another loop will run through up until the number doing the test each time
		//break if remainder 0 found so we move on to the next number
	//if we pass this test, add the number to a sum variable

function sumPrimes(num) {
	var sum = 0;
	var makeNegative = false;

	if(num < 0){
		num = Math.abs(num); //if the number is negative, we will flip the sign for the bulk of the function and then make the resulting sum negative
		makeNegative = true;
	}

	if(num < 2){
		return undefined; //there are no prime numbers smaller than 2 (except negative numbers?)
	}

	for(var i = 3; i <= num; i += 2){

		if(testPrime(i)){
			sum += i;
		}	
		
	}

	if(makeNegative){
		sum *= -1;
	}

  return sum;
}

function testPrime(num){
	for(var j = 2; j < num; j++){
			if(num % j === 0){
				console.log(num + " is not prime");
				return false;
			} 
		}
	return true;
}



sumPrimes(30);