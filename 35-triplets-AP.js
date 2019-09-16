var findAllTriplets = (arr,n) => {
	
	for(var j=1;j<n;j++){
		var i = j-1,k=j+1;
		
		while(i>=0 && k<n) {
			if(arr[i] + arr[k] == 2 * arr[j]) {
				
				console.log(arr[i] + " " + arr[j] + " " + arr[k]);
				k++,i--;
			}

			else if(arr[i] + arr[k] < 2 * arr[j]) {
				k++;
			}

			else {
				i--;
			}
		
		}
	
	}

}

console.log(findAllTriplets([1,3,5,6,8,9,15],7));
