/*

    Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

    The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

    Example 1:

    Input:
    [
      ["5","3",".",".","7",".",".",".","."],
      ["6",".",".","1","9","5",".",".","."],
      [".","9","8",".",".",".",".","6","."],
      ["8",".",".",".","6",".",".",".","3"],
      ["4",".",".","8",".","3",".",".","1"],
      ["7",".",".",".","2",".",".",".","6"],
      [".","6",".",".",".",".","2","8","."],
      [".",".",".","4","1","9",".",".","5"],
      [".",".",".",".","8",".",".","7","9"]
    ]
    Output: true
    Example 2:

    Input:
    [
      ["8","3",".",".","7",".",".",".","."],
      ["6",".",".","1","9","5",".",".","."],
      [".","9","8",".",".",".",".","6","."],
      ["8",".",".",".","6",".",".",".","3"],
      ["4",".",".","8",".","3",".",".","1"],
      ["7",".",".",".","2",".",".",".","6"],
      [".","6",".",".",".",".","2","8","."],
      [".",".",".","4","1","9",".",".","5"],
      [".",".",".",".","8",".",".","7","9"]
    ]
    Output: false
    Explanation: Same as Example 1, except with the 5 in the top left corner being
        modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

*/


/**
 * @param {character[][]} board
 * @return {boolean}
 */
 /**
 *
 * O(n) time
 * O(n) space (3n)
 *
 * 15m
 */
var isValidSudoku = function(board) {
    if (!board || board.length === 0 || board[0].length === 0) return false;

    let rows = board.length;
    let cols = board[0].length;
    let hashset = new Set(); // hashset

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let num = board[r][c];
            if (num === '.') continue;

            let rowKey = 'r' + r + '|' + num;
            let colKey = 'c' + c + '|' + num;
            let gridKey = 'g'+ ~~((Number(r))*3/rows) + '|' + ~~((Number(c)*3)/cols) + '|' + num;
            if (!hashset.has(rowKey) && !hashset.has(colKey) && !hashset.has(gridKey)) {
                hashset.add(rowKey);
                hashset.add(colKey);
                hashset.add(gridKey);
            } else {
                return false;
            }
        }
    }
    return true;
};

