/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let res = new Array(rowIndex + 1).fill(0);
  res[0] = 1;
  /*
          1
         1,1
        1,2,1
       1,3,3,1
      1,4,6,4,1
  */
  for (let i = 0; i < res.length; i++) {
    for (let j = i; j > 0; j--) {
      if (j === i) res[j] = 1;
      else {
        res[j] = res[j] + res[j - 1];
      }
    }
  }
  return res;
};
