/**
 * @param
 * @return
 */

/**
 *
 * O(n) time preprocess
 * O(n) space for map
 * O(1) for isUnique() call
 *
 * 45m
 */

/*
    =================== solution 1 (115ms) ===================
*/
/**
 * @param {string[]} NOTE: dictionary is unique here!!!
 */
var ValidWordAbbr = function(dictionary) {
    this.map = new Map();
    for (let i = 0; i < dictionary.length; i++) {
        let w = dictionary[i];
        if (w.length < 3) this.map.set(w, [w]);
        else {
            let key = this.toAbbr(w);
            let group = this.map.get(key) || [];
            group.push(w);
            this.map.set(key, group);
        }
    }
};

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    let len = word.length;
    if (len < 3) return true;
    let key = this.toAbbr(word);
    if (this.map.has(key)) {
        let group = this.map.get(key);
        if (group.length === 1) return group[0] === word;
        return false;
    }
    return true;
};

ValidWordAbbr.prototype.toAbbr = (word) => {
    let len = word.length;
    if (len < 3) return word;
    return word[0] + (len-2) + word[len-1];
}
/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = Object.create(ValidWordAbbr).createNew(dictionary)
 * var param_1 = obj.isUnique(word)
 */


/*
    =================== solution 2 (96ms) ===================
*/
/**
 * @param {string[]} dictionary is unique
 */
var ValidWordAbbr = function(dictionary) {
    this.map = new Map();
    for (let i = 0; i < dictionary.length; i++) {
        let w = dictionary[i];
        if (w.length < 3) this.map.set(w, true);
        else {
            let key = this.toAbbr(w);
            let val = this.map.has(key) ? false : w;
            this.map.set(key, val);
        }
    }
};

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    let len = word.length;
    if (len < 3) return true;

    let key = this.toAbbr(word);
    if (this.map.has(key)) {
        let val = this.map.get(key);
        if (val === false) return false;
        return word === val;
    }
    return true;
};

ValidWordAbbr.prototype.toAbbr = (word) => {
    let len = word.length;
    if (len < 3) return word;
    return word[0] + (len-2) + word[len-1];
}

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = Object.create(ValidWordAbbr).createNew(dictionary)
 * var param_1 = obj.isUnique(word)
 */