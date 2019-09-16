// Program to find best buying and selling days 



var maxProfit = (price, n) => {
        // store maximum profit gained  
        var profit = 0;

        // initialize local minimum to first element's i$
        var j=0;

        // start from second element
        for(var i=0;i<n;i++) {
                // update local minimum to first element$
                if(price[i-1] > price[i]) {
                        j=i;            
                }

                if(price[i-1] <= price[i] && (i+1 == n |$
                        profit += (price[i] - price[j]);
                        console.log("Buy on day "+(j+1)+$
                }
        }

        return profit;

}

console.log(maxProfit([1,5,3,2,7,8,4,5,6,4],10));

