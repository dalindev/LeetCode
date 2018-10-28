/**
 * @param {number} n
 * @return {boolean}
 */
 /**
 *
 * O(n) time ???
 * O(n) space ???
 *
 * 15m
 */
var isHappy = function(n) {
    let hashset = new Set();
    while (n !== 1) {
        if (hashset.has(n)) return false;

        hashset.add(n);
        n = getNext(n);
    }

    return true;

    function getNext (num) {
        let next = 0;
        while (num > 9) {
            let temp = num % 10;
            next += temp ** 2;
            num = ~~(num/10);
        }
        return next + num*num;
    };
};


/**
 *
 * O(n) time ???
 * O(n) space ???
 *
 * 5m
 */
var isHappy = function(n) {
    let hashset = new Set();
    while (n !== 1) {
        if (hashset.has(n)) return false;

        hashset.add(n);

        let tmp = String(n);
        let next = 0;
        for (let i = 0; i < tmp.length; i++) {
            next += (+tmp[i]) ** 2;
        }
        n = next;
    }

    return true;
};

