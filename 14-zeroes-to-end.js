//Move all zeros to end of the array 


var moveZeroes = (nums) => {
    var i, temp;

    for (i = nums.length-1; i>=0; i--) {
        if(nums[i] === 0) {
            temp = nums.splice(i, 1);
            nums.push(temp[0]);
        }
    }
    return nums;
}

console.log(moveZeroes([1,2,0,5,0,2,0,8,9]));
