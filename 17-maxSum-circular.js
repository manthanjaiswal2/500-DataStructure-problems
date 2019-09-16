// Maximum sum of circular subarray

function kadaneCircular(list) {

    let sum = 0, maxSum = 0, lastIndex = 0;

    // keep track of last index from where non-zero sum started
    for(let i = 0; i < list.length; i++) {
        sum+=list[i];
        if(sum < 0) {
            sum = 0;
        }
        else {
            maxSum = Math.max(sum, maxSum);
            // we just have started accumulating
            if(sum === list[i])
                lastIndex = i;
        }
    }

    // start from 0 to lastIndex and keep using last accumulated sum
    for(let i = 0; i < lastIndex; i++) {
        sum+=list[i];
        if(sum < 0)
            sum = 0;
        else
            maxSum = Math.max(sum, maxSum);
    }

    console.log(list, maxSum);

}
