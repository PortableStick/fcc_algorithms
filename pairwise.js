function pairwise(arr, arg) {
    var indicies = [];
    arr.reduce(function(prev, curr, idx, array) {
        // console.log("prev = " + prev);
        // console.log("curr = " + curr +  " at  index " + id);
        array.map(function(x, subIdx) {
            if (idx !== subIdx) {
                // console.log(x + " plus " + curr + " is " + (x + curr));
                if (curr + x === arg) {
                    if (indicies.indexOf(subIdx) === -1 && indicies.indexOf(idx) === -1) {
                        indicies.push(subIdx);
                        indicies.push(idx);
                    // console.log(x + " plus " + curr + " is " + (x + curr));
                    }
                }
            }

        });
    }, 0);
    // console.log(indicies);
    indicies = indicies.reduce(function(prev, curr) {
        return prev + curr || 0;
    }, 0);

    return indicies;
}

// console.log(pairwise([1,4,2,3,0,5], 7));
// console.log(pairwise([1, 3, 2, 4], 4));
// console.log(pairwise([1,1,1], 2));
// console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
// console.log(pairwise([], 100));
