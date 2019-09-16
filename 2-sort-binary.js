// Sort binary array in linear time

let sortBinary = (arr) => {

let left = 0, right = arr.length - 1;
while (left < right)
    {
        while (arr[left] == 0 && left < right)
            left++;

        while (arr[right] == 1 && left < right)
            right--;

        if (left < right)
        {
            arr[left] = 0;
            arr[right] = 1;
            left++;
            right--;
        }
    }

return arr;

}

console.log(sortBinary([1,0,1,0,0,]));
