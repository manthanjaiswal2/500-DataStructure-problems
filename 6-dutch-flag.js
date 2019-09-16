//Dutch Flag problem


//Function to swap two elements
let swap = (arr, first, second) => {
  [arr[first], arr[second]] = [arr[second], arr[first]];
}

//Solution
let dutchNatFlag = (arr) => {
   let low = 0;
   let mid = 0;
   let high = arr.length - 1;
   
   //To sort in ascending order
   while (mid <= high) {
	if (arr[mid] === 0) { 
	    swap(arr, low++, mid++);
	} else if (arr[mid] === 2) {
	    swap(arr, mid, high--);
	} else if (arr[mid] === 1) {
	    mid++;
	}
   }

   return arr;
}

console.log(dutchNatFlag([1,0,2,1,1,0,2]));
