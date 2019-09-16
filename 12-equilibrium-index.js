// Find an equilibrium index


function solution(A) {


    var arrLen = A.length;

    var i = 0;



    for(i = 0; i < arrLen; i++){

        //console.log("i: " + i);

         var firstSum = 0;
        var secSum = 0;

        var currIndex = i + 1;

        //get first chunk
        var j = 0;
        var lenJ = currIndex;

        for(j = 0; j < lenJ; j++){

            //console.log("firstChink: " + j);
            firstSum += A[j];

        }


        //get second chunk
        j = currIndex + 1;
        lenJ = arrLen;

        for(j; j < lenJ; j++){

            //console.log("secChunk: " + j);
            secSum += A[j];

        }

        if(firstSum == secSum){

            return currIndex;

        }



    }


    return arrLen;

}

console.log(solution([2,3,5,4,2,1,7]));
