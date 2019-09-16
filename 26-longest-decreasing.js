// Longest decreasing subsequence

var lds = (arr,n) => {
        var lds = [n];
        var i,j,max = 0;


        for(i=0;i<n;i++) {
                lds[i] = 1;
        }


        for(i=1;i<n;i++) {
                for(j=0;j<i;j++) {
                        if(arr[i] < arr[j] && lds[i] < lds[j] + 1) {
                                lds[i] = lds[j] + 1;
                        }
                }

        }

        for(i=0;i<n;i++) {
                if(max < lds[i]) {
                        max = lds[i];
                }
        }

        return max;
}


console.log("Length of LDS is " + lds([15, 27,14,38,63,55,46,65,85,70],10));


