//Alternating sorting


let a = [1, 4, 5, 8, 3, 2, 6, 9, 7, 10];
a.sort((a, b) => a - b);
let b =[];
let l = a.length-1;  // micro optimization
let L = l/2;         // micro optimization
for(var i=0; i<L; i++) b.push( a[l-i] ,a[i] );
if(a.length%2) b.push( a[i] ); // add last item in odd arrays

console.log(b);
