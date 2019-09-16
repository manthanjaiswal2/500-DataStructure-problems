// Returns maximum sum in a subarray of size k

var maxSum = (arr,n,k) => {
	if(n < k) {
		console.log("Invalid");
		return -1;
	}

	// Compute sum of first window of size k
	var res = 0;
	for(var i=0;i<k;i++) {
		res += arr[i];	
	}
	
	// Compute sums of remaining windows by
	// removing first element of previous
	// window and adding last element of
	// current window

	var curr_sum = res;
	for(var i=k; i<k; i++) {
		curr_sum += arr[i] - arr[i-k];
		res = max(res, curr_sum);	
	}

	return res;
}

console.log(maxSum([1,4,2,10,2,3,1,0,20],9,4))
