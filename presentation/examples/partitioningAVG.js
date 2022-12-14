function asyncAvg(n, avgCB) {
    var sum = 0;
    function help(i, cb) {
        sum += i;
        if (i == n) {
            cb(sum);
            return;
        }

        // "Asynchronous recursion".
        // Schedule next operation asynchronously.
        setImmediate(help.bind(null, i+1, cb));
    }

    // Start the helper, with CB to call avgCB.
    help(1, function(sum){
        var avg = sum/n;
        avgCB(avg);
    });
}

asyncAvg(n, function(avg){
    console.log('avg of 1-n: ' + avg);
});
