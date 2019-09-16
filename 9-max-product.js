// Maximum product of two integers in an array


const twoSum = (arr) => {
  let highestInt = 0;
  let nextHighestInt = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] > highestInt) {
      nextHighestInt = highestInt;
      highestInt = arr[i];
    } else if (arr[i] > nextHighestInt) {
      nextHighestInt = arr[i];
    } else {
      continue;
    }
  }
  return highestInt * nextHighestInt;
}

console.log(twoSum([2,4,5,8,9,3]));

