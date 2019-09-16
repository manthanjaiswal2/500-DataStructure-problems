// Kadane's algorithm


function maxSubarraySum(arr) {

//keep track of the current sum

	let currentSum = 0;
	
//keep track of the max sum

	let maxSum = 0;

	for(let i=0;i<arr.length;i++) {
	// store current number in an array
		let currentNum = arr[i];
	
	//set currentSum accordingly
		currentSum = Math.max((currentSum + currentNum), 0);

	// set maxSum accordingly
		maxSum = Math.max(currentSum,maxSum);
	}

	return maxSum;

}

console.log(maxSubarraySum([2,4,5,3,7,8]));

