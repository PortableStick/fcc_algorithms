/**************************
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
**************************/

//create a for loop that increments i + previous i
//check if number is odd - only add if odd!!!
//return i when done

function sumFibs(num) {
	var i = 1;
	var prevI = 0;
	var sum = 0;

	while(i <= num){
		i += prevI;
		prevI = i - prevI;
		if(prevI % 2 !== 0){
			sum += prevI;
		}
	}

  return sum;
}

sumFibs(4);


/**************************
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5

i += prevI;
prevI = i - prevI;

**************************/
