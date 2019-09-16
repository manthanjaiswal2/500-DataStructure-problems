// To find the minimum number of platforms

var findPlatform = (arr,dep,n) => {

	arr.sort();
	dep.sort();

	var plat_needed = 1, result = 1;
	var i=1,j=0;

	while (i < n && j < n) {
		if(arr[i] <= dep[j]) {
			plat_needed++;
			i++;

			if(plat_needed > result) {
				result= plat_needed;			
			}	
		}

		else {
			plat_needed--;
			j++;		
		}	
	
	}
	
	return result;	

}

console.log("Minimum number of platforms required: " + findPlatform([900,940,950,1100,1500,1800],[910,1200,1120,1130,1900,2000],6));


