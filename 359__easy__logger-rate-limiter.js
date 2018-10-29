/*

    Design a logger system that receive stream of messages along with its timestamps, each message should be printed if and only if it is not printed in the last 10 seconds.

    Given a message and a timestamp (in seconds granularity), return true if the message should be printed in the given timestamp, otherwise returns false.

    It is possible that several messages arrive roughly at the same time.

    Example:

    Logger logger = new Logger();

    // logging string "foo" at timestamp 1
    logger.shouldPrintMessage(1, "foo"); returns true;

    // logging string "bar" at timestamp 2
    logger.shouldPrintMessage(2,"bar"); returns true;

    // logging string "foo" at timestamp 3
    logger.shouldPrintMessage(3,"foo"); returns false;

    // logging string "bar" at timestamp 8
    logger.shouldPrintMessage(8,"bar"); returns false;

    // logging string "foo" at timestamp 10
    logger.shouldPrintMessage(10,"foo"); returns false;

    // logging string "foo" at timestamp 11
    logger.shouldPrintMessage(11,"foo"); returns true;

*/


/**
 * Initialize your data structure here.
 */
var Logger = function() {
    this.map = new Map();
    this.limit = 10;
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity.
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if ( !this.map.has(message)
      || this.map.has(message) && this.map.get(message) <= timestamp
    ) {
        this.map.set(message, timestamp + this.limit);
        return true;
    }
    return false;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = Object.create(Logger).createNew()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

