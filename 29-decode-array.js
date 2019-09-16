var findAndPrintOriginalArray = (arr,n) => {
	
	var arr_sum=0;
	for(var i=0;i<n;i++) {
		arr_sum += arr[i];
	}
	
	
	arr_sum =arr_sum / (n-1);

	for(var i=0;i<n;i++) {
		console.log(arr_sum - arr[i] + " ");
	}	
	

}

var arr = [10,14,12,13,11];
var len = arr.length;

console.log(findAndPrintOriginalArray(arr,len));


