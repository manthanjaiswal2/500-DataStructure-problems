var findAllTriplets = (arr,n) => {
	if(n<3) {
		return;
	}


	for(var j=1;j<n-1;j++) {
		var i =j-1,k=j+1;

		while (1) {
			while (i >= 0 && k < n && (arr[j] % arr[i] == 0) && (arr[k] % arr[j] == 0) && (arr[j] / arr[i] == arr[k] / arr[j])) {
				console.log(arr[i] + " " + arr[j] + " " + arr[k]);
				
				k++, i--;
	
			}


			if(i<0 || k>=n) {
                       	 break;
               		 }

			if(arr[j] % arr[i] == 0 && arr[k] % arr[j] == 0){
	                        if(arr[j] / arr[i] < arr[k] / arr[j]) {
        	                        i--;
                       		 }

                       		 else {
                                	k++;
                        	 }
                	}

			else if(arr[j] % arr[i] == 0) {
                       		 k++;
                	}

                	else {
                        	i--;
                	}

		}

	}


}


console.log(findAllTriplets([1,2,6,10,18,54],6));
