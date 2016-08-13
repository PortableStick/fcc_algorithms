function translateNumbers(numberObj) {
    var result = "";
    if(numberObj.arabic === 9) {
        result += numberObj.nine;
    } else if(numberObj.arabic >= 5) {
        result += numberObj.five;
        for(var i = (numberObj.arabic - 5); i > 0; i--) {
            result += numberObj.one;
        }
    } else if(numberObj.arabic === 4) {
        result += numberObj.four;
    } else {
        for(var i = numberObj.arabic; i > 0; i--) {
            result += numberObj.one;
        }
    }
    return result;
}

function convertToRoman(num) {
    var thousands = Math.floor(num/1000),
        hundreds = Math.floor((num % 1000)/100),
        tens = Math.floor((num % 100)/10),
        ones = num % 10,
        romanString = "",
        numbers = [
            {
                arabic: hundreds,
                nine: "CM",
                five: "D",
                four: "CD",
                one: "C"
            },
            {
                arabic: tens,
                nine: "XC",
                five: "L",
                four: "XL",
                one: "X"
            },
            {
                arabic: ones,
                nine: "IX",
                five: "V",
                four: "IV",
                one: "I"
            }
        ];

    //thousands edgecase - **THANKS ROMANIA! :P**
    while(thousands) {
        romanString += "M";
        thousands--;
    }

    numbers.forEach(function(numberObj) {
        romanString += translateNumbers(numberObj);
    });

 return romanString;
}

convertToRoman(1987);


