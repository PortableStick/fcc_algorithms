/*************PLAN**************
Implement a way of converting two dates into a more friendly date range that could be presented to a user.

It must not show any redundant information in the date range.

For example, if the year and month are the same then only the day range should be displayed.

Secondly, if the starting year is the current year, and the ending year can be inferred by the reader, the year should be omitted.

Input date is formatted as YYYY-MM-DD
********************************/

function friendly(str) {
	var str1 	= str[0],
		str2 	= str[1],
		output	= [],
		now 	= (function(){
			var tmp = new Date(Date.now());
			return {
				year: tmp.getUTCFullYear(),
				month: tmp.getUTCMonth(), 
				day: tmp.getUTCDate()
			}
		})();

		function parseDate(str){
			var year 	= parseInt(str.substr(0,4)),
				month 	= parseInt(str.substr(5,2)) - 1,
				day		= parseInt(str.substr(8,2))
				
				return {
					year: year,
					month: month,
					day: day
				}
		}

		function formatMonth(month){
			var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			return months[month]
		}

		function formatDay(day){
			day = day.toString();
			switch(day[day.length - 1]){
				case '1':
					return day + 'st';
					break;
				case '2':
					return day + 'nd';
					break;
				case '3':
					return day + 'rd';
					break;
				default:
					return day + 'th';
					break;
			}
		}

		function stringAssembler(){
																															   
			var tmp1 = tmp2 = '', tmpArray = [], str1Copy = parseDate(str1), str2Copy = parseDate(str2), millisecondsPerYear = 31560000000,
			millisecondsPerMonth = 2630000000,

				date1 	= new Date(str1Copy.year, str1Copy.month, str1Copy.day),
				date2  	= new Date(str2Copy.year, str2Copy.month, str2Copy.day);

			function isLongerThanAYear(){
				if(Math.abs(date1 - date2) > millisecondsPerYear){
					return true;
				} else {
					return false;
				}
			}

			function isLongerThan6Months(){
				if(Math.abs(date1 - date2) > (millisecondsPerMonth * 6)) {
					return true;
				} else {
					return false;
				}
			}

			function isLessThanAMonth(){
				if(Math.abs(date1 - date2) < millisecondsPerMonth){
					return true;
				} else {
					return false;
				}

			}

			tmp1 += formatMonth(str1Copy.month) + ' ' + formatDay(str1Copy.day);

			if(isLongerThan6Months()){
				tmp1 += ', ' + str1Copy.year;
			}

			tmpArray.push(tmp1);

			if(date1 - date2 !== 0){
				if(!isLessThanAMonth()){
					tmp2 += formatMonth(str2Copy.month) + ' ';
				}

				tmp2 += formatDay(str2Copy.day);

				if(isLongerThan6Months()){
					tmp2 += ', ' + str2Copy.year;
				}

				tmpArray.push(tmp2);
			} else {
				tmpArray[0] += ', ' + str1Copy.year;
			}
			return tmpArray;
		}
  return stringAssembler();
}

console.log(friendly(['2015-07-01', '2015-07-04']));
console.log(friendly(["2015-12-01", "2016-02-03"]));
console.log(friendly(["2015-12-01", "2017-02-03"]));
console.log(friendly(["2016-03-01", "2016-05-05"]));
console.log(friendly(["2017-01-01", "2017-01-01"]));
console.log(friendly(["2022-09-05", "2023-09-04"]));


/*
switch(month){
	case 1:
		return 'January';
		break;
	case 2:
		return 'February';
		break;
	case 3:
		return 'March';
		break;
	case 4:
		return 'April';
		break;
	case 5:
		return 'May';
		break;
	case 6:
		return 'June';
		break;
	case 7:
		return 'July';
		break;
	case 8:
		return 'August';
		break;
	case 9:
		return 'September';
		break;
	case 10:
		return 'October';
		break;
	case 11:
		return 'November';
		break;
	case 12:
		return 'December';
		break;
}

switch(day[day.length - 1]){
	case '1':
		return day + 'st';
		break;
	case '2':
		return day + 'nd';
		break;
	case '3':
		return day + 'rd';
		break;
	default:
		return day + 'th';
		break;
}

*/
