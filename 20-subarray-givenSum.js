// Find subarray of the given sum


function getSubset(array, sum) {
    function iter(temp, delta, index) {
        if (!delta) result.push(temp);
        if (index >= array.length) return;
        iter(temp.concat(array[index]), delta - array[index], index + 1);
        if (!temp.length) iter(temp, delta, index + 1);
    }

    var result = [];
    iter([], sum, 0);
    return result;
}

consol.log(getSubset([1,2,5,4,6,7],9));
