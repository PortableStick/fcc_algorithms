/**************************
Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.
**************************/

//f(a) = 2pi*sqrt(a^3/GM)
//= 2pi*Math.pow(Math.pow(arr.avgAlt + earthRadius,3)/GM, .5)  Make this more readable!

//Set loop to run through arbitrary number of objects
//Make calculation
//remove avgAlt from object
//add orbitalPeriod property to object and set it equal to result from calculation

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var PI = Math.PI;
    for (var i = 0; i < arr.length; i++) {
        var a = arr[i].avgAlt + earthRadius;
        a = Math.pow(a, 3);

        var calc = 2 * PI * Math.sqrt(a / GM, 0.5);
        calc = Math.round(calc);
        delete arr[i].avgAlt;
        arr[i].orbitalPeriod = calc;
    }


    return arr;
}

orbitalPeriod([{
    name: "sputkin",
    avgAlt: 35873.5553
}]);


