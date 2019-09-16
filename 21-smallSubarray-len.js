var min = (x,y) => {
	return (x < y)? x:y; 
}

// Function to find the length of smallest subarray whose sum of the element is greater than the given number.

var smallestSubarray = (arr,n,k) => {

	// stores the current window sum
	var windowSum = 0;

	// stores the result	
	var len = 2147483647;

	// stores window's staring index
	var left = 0;

	// maintain a sliding wndow [left..right]
	for(var right=0; right<n; right++) {
		// include current element in the window
		windowSum += arr[right];

		// window becomes unstable if its sum become more than k
		while (windowSum > k && left <= right) {
			//update the result if current window's length is less than minimum found so far.
			len = min(len, right - left + 1);
			//remove elements from the window's left side till window become stable again.
			windowSum -= arr[left];
			left++;
		}	
	}
	
	return len;
}


var len = smallestSubarray([1,2,3,4,5,6,7,8],8,21);
if(len != 2147483647) {
	console.log("Smallest sub-array length is " + len);
}

else {
	console.log("No sub-array exists");
}
	

