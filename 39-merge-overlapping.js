//Merge overlapping intervals


let merge_intervals = function(v1) {
  if (!v1 || v1.length === 0) {
    return;
  }

  let v2 = [];
  v2.push([ v1[0][0], v1[0][1] ]);

  for (let i = 0; i < v1.length; i++) {
    let x1 = v1[i][0];
    let y1 = v1[i][1];
    let x2 = v2[v2.length - 1][0];
    let y2 = v2[v2.length - 1][1];

    if (y2 >= x1) {
      v2[v2.length - 1][1] = Math.max(y1, y2);
    } else {
      v2.push([ x1, y1 ]);
    }

  }
  return v2;
};

console.log(merge_intervals([[1,5],[3,7],[4,6],[6,8],[10,12],[11,15]]));
console.log(merge_intervals([[4,12],[13,16],[19,20],[20,24]]));
console.log(merge_intervals([[2,10],[4, 12], [11, 13], [15, 20]]));
