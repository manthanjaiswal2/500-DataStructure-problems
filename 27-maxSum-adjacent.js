var findMaxSum = (arr,n) => {
	var incl = arr[0];
	var excl = 0;
	var excl_new;
	
	for(var i=1;i<n;i++) {
		excl_new = (incl > excl) ? incl:excl;
		
		incl = excl + arr[i];
		excl = excl_new;
	}

	return ((incl > excl)? incl:excl);
}

console.log(findMaxSum([5,5,10,100,10,5],6));
