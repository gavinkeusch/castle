describe('CastleSpecs', function () {

    it('should return 0 castles when given an empty array', function () {
        var input = [];
        expect(determineCastleCount(input)).toEqual(0);
    });

    it('should return -1 if the input contains non-number values', function () {
        var input = [1, 'A'];
        expect(determineCastleCount(input)).toEqual(-1);
    });

    it('should return 1 castle when given an array with 1 number', function () {
        var input = [3];
        expect(determineCastleCount(input)).toEqual(1);
    });

    it('should return 1 castle when given an array of 2 numbers', function () {
        var input = [3,4];
        expect(determineCastleCount(input)).toEqual(1);
    });

    it('should return 2 castles with peak example', function () {
        var input = [2,6,6,6,3];
        expect(determineCastleCount(input)).toEqual(2);
    });

    it('should return 4 castles', function () {
        var input = [2,1,2,2,2,3,3,2,2,1,2];
        expect(determineCastleCount(input)).toEqual(4);
    });

    it('should return 6 castles', function () {
        var input = [1,2,4,4,4,5,3,2,1,2,1,2,5,5,6,3];
        expect(determineCastleCount(input)).toEqual(6);
    });

    it('should return 1 castle if all the same height', function () {
        var input = [4,4,4,4];
        expect(determineCastleCount(input)).toEqual(1);
    });

    it('should return 2 castle if all the same height with 1 valley', function () {
        var input = [4,4,0,4,4];
        expect(determineCastleCount(input)).toEqual(2);
    });

    it('should return 2 castle if all the same height with 1 peak', function () {
        var input = [4,4,6,4,4];
        expect(determineCastleCount(input)).toEqual(2);
    });

    it('should return 1 castle if all the same height of zeros', function () {
        var input = [0,0,0,0,0];
        expect(determineCastleCount(input)).toEqual(1);
    });

    it('should return 2 castle negative number test', function () {
        var input = [-1,0,1,0,-1];
        expect(determineCastleCount(input)).toEqual(2);
    });

    it('should return 3 castle double digit test', function () {
        var input = [100,110,100,50,100];
        expect(determineCastleCount(input)).toEqual(3);
    });
});