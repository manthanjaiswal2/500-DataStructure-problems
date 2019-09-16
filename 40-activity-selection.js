var printMaxActivities = (s,f,n) => {
	var i,j;
	
	console.log("Following activities are selected "+ n);

	// The first activity always gets selected
	i = 0;
	console.log(i);

	for(j=1;j<n;j++) {
		if(s[j] >= f[i]) {
			console.log(j);
			i=j;
		}
	
	}

}


console.log(printMaxActivities([1,3,0,5,8,5],[2,4,6,7,9,9],6));

