function checkCashRegister(price, cash, cid) {
	var change 			= cash - price,
  		currencyInfo 	= {
					  			"ONE HUNDRED": 	100,
					  			"TWENTY": 	20,
					  			"TEN":		10,
					  			"FIVE":		5,
					  			"ONE":		1,
					  			"QUARTER":	0.25,
					  			"DIME":		0.10,
					  			"NICKEL":	0.05,
					  			"PENNY":	0.01
					  		},
		cashDrawer 		= cid.reduce(function(prev, curr){
								prev[curr[0]] = Math.ceil(curr[1] / currencyInfo[curr[0]]);
								return prev;
							}, {});

	function getCount(currency){
		return Math.floor(change/currencyInfo[currency]) <= cashDrawer[currency] ? Math.floor(change/currencyInfo[currency]) : cashDrawer[currency];
	}

  	var	changeArray = [];

	for(var key in currencyInfo){
		var count			= getCount(key),
			tmpArr			= [],
			currentAmount	= count * currencyInfo[key];
			if(currentAmount > 0){
				tmpArr[0] 		= key;
				tmpArr[1] 		= currentAmount;
				cashDrawer[key]	-= count;
				change 			-= currentAmount;
				change 			= change.toPrecision(4);
				changeArray.push(tmpArr);
			}
	}

	var message = (function(){
		function cashDrawerIsEmpty(){
			for(var key in cashDrawer){
				if(cashDrawer[key] !== 0){
					console.log(cashDrawer[key]);
					return false;
				}
			}
			return true;
		}

		if(change !== '0.000'){
			return "Insufficient Funds";
		} else if(cashDrawerIsEmpty()){
			return "Closed";
		}
	})();

	return change === '0.000' ? (message === "Closed" ? message : changeArray) : message;
}




 console.log(drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

 // console.log(drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

 // console.log(drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]))

 //console.log(drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

//console.log(drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));