/**

    Given a robot cleaner in a room modeled as a grid.

    Each cell in the grid can be empty or blocked.

    The robot cleaner with 4 given APIs can move forward, turn left or turn right. Each turn it made is 90 degrees.

    When it tries to move into a blocked cell, its bumper sensor detects the obstacle and it stays on the current cell.

    Design an algorithm to clean the entire room using only the 4 given APIs shown below.

    interface Robot {
    // returns true if next cell is open and robot moves into the cell.
    // returns false if next cell is obstacle and robot stays on the current cell.
    boolean move();

    // Robot will stay on the same cell after calling turnLeft/turnRight.
    // Each turn will be 90 degrees.
    void turnLeft();
    void turnRight();

    // Clean the current cell.
    void clean();
    }
    Example:

    Input:
    room = [
        [1,1,1,1,1,0,1,1],
        [1,1,1,1,1,0,1,1],
        [1,0,1,1,1,1,1,1],
        [0,0,0,1,0,0,0,0],
        [1,1,1,1,1,1,1,1]
    ],
    row = 1,
    col = 3

    Explanation:
    All grids in the room are marked by either 0 or 1.
    0 means the cell is blocked, while 1 means the cell is accessible.
    The robot initially starts at the position of row=1, col=3.
    From the top left corner, its position is one row below and three columns right.

 */
/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {Robot} robot
 * @return {void}
 */

/**
 *
 * O(n) time
 * O(n) space
 *
 * Runtime: 76 ms, faster than 98.80%
 */
var cleanRoom = function(robot) {
    const doneSet = new Set();
    // [x, y] up, right, down, left
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    dfs(0, 0, 0);

    function dfs(lastDirIndex, x, y) {
        // move -> clean -> add to doneSet [x:y]
        robot.clean();
        doneSet.add(`${x}:${y}`);
        // dfs 4 direction (if not visited)
        for (let i = 0; i < 4; i++) {
            let currDirIndex = (lastDirIndex + i) % 4;
            let xx = x + dirs[currDirIndex][0];
            let yy = y + dirs[currDirIndex][1];

            // if the facing grid not cleaned yet
            // try to move to the facing grid now
            if (!doneSet.has(`${xx}:${yy}`) && robot.move()) {
                dfs(currDirIndex, xx, yy);
            }

            robot.turnRight(); // turn right 4 time so we face the same direction as we get here
        }

        // we have done 4 directions here, move back to where we come from
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    }
};
