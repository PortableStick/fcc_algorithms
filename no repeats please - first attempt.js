function permAlone(str) {
    var mutations = [],
        arrCopy = str.split('');

    function swap(idx1, idx2) {
        var tmp = arrCopy[idx1];
        arrCopy[idx1] = arrCopy[idx2];
        arrCopy[idx2] = tmp;
    }

    function generate(n) {
        if (n === 1) {
            mutations.push(arrCopy.join(''));
        } else {
            for (var i = 0; i < n; i++) {
                generate(n - 1);
                swap(n % 2 === 0 ? i : 0, n - 1);
            }
        }
    }

    function removeDuplicates(arr) {
        arr = arr.filter(function(x) {
            return !x.match(/(\w)(?=\1)/);
        });
        return arr;
    }

    generate(str.length);
    var total = removeDuplicates(mutations).length;
    return total;
}



console.log(permAlone('aab'));
console.log(permAlone('abcdefa'));
console.log(permAlone('abfdefa'));