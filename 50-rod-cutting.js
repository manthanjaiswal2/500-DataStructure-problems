function rodCut(price,n) {

	if(n == 0)
		return 0;

	var maxValue = 0;

	for(var i=1;i<=n;i++) {

		var cost = price[i - 1] + rodCut(price, n-i);

		if(cost > maxValue)
			maxValue = cost;
	}

	return maxValue;
}


var length = [1,2,3,4,5,6,7,8];
var price = [1,5,8,9,10,17,17,20];

var n=4;

console.log("Profit is:  " + rodCut(price,n));
