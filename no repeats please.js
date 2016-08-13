function permAlone(str) {
    var finalArr = [];
    function heaps(count, arr) {
        if (count === 1) {
            finalArr.push(arr.join(''));
            return arr;
        }

        for (var i = 0; i < count - 1; i++) {
            heaps(count - 1, arr);
            if (count % 2 === 0) {
                var tmp = arr[i];
                arr[i] = arr[count - 1];
                arr[count - 1] = tmp;
            } else {
                var tmp = arr[0];
                arr[0] = arr[count - 1];
                arr[count - 1] = tmp;
            }
        }
        return heaps(count - 1, arr);
    }
    heaps(str.length, str.split(''));

    finalArr = finalArr.filter(function(x) {
        return !x.match(/(\w)(?=\1)/);
    });
    return finalArr.length;
}

console.log(permAlone('aab'));

