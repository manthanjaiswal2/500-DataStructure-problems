function findMinCoins(arr,n,m) {

	if(m == 0) {
		return 0;
	}

	if(m < 0) {
		return 2147483647;
	}

	var coins = 2147483647;

	for(var i=0;i<n;i++) {
		var res = findMinCoins(arr, n,m-arr[i]);

		if(res != 2147483647)
			coins = Math.min(coins, res + 1);

	}

	return coins;
}


var arr = [1,2,3,4];
var n = arr.length;
var m = 15;

console.log("Minimum number of coins to get desired change   " + findMinCoins(arr,n,m));


