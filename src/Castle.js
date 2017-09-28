/**
 * @ngdoc Function
 * @name determineCastleCount
 * @description
 * Function that when given an array of numbers representing heights will determine how many castle should be build.
 * Castles are build on the peaks and valleys of the representing hills.
 * @params arrayOfHeights an array of numbers representing heights of the given hills
 * @returns number of castles to be built. -1 if array contains non-numbers
 */
function determineCastleCount(arrayOfHeights) {
    var length = arrayOfHeights.length;

    if (arrayOfHeights.some(isNaN)) {
        return -1;
    } else if (length === 0) {
        return 0;
    } else if (length <= 2) {
        /**the assumptions states you can always build a castle at the start of the array.
           it also says that valleys and peaks use the preceding and following ints. With this statement
           I have made the assumption you do not build a castle on the last element of the array because
           you don't know the fallowing int.*/
        return 1;
    }

    var castleCount = 1;
    var last = arrayOfHeights[0];
    var current = arrayOfHeights[1];
    var next = null;

    for (var i = 2; i < length; i++) {
        next = arrayOfHeights[i];
        if (current === next) {
            continue;
        }
        //last < current > next == peak
        //last > current < next == valley
        if ((last < current && current > next) || (last > current && current < next)) {
            castleCount++;
        }
        last = current;
        current = next;
    }

    return castleCount;
}