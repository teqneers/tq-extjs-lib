describe('TQ.math.Statistic', function() {

    it('calculates the average of an array of numbers', function() {
        var data    = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            result  = TQ.math.Statistic.average(data);
        expect(result).toBeCloseTo(4.5, 1);
    });

    it('calculates the sum of an array of numbers', function() {
        var data    = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            result  = TQ.math.Statistic.sum(data);
        expect(result).toBeCloseTo(45, 0);
    });

    it('calculates the population variance of an array of numbers', function() {
        var data    = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            result  = TQ.math.Statistic.variance(data);
        expect(result).toBeCloseTo(8.25, 2);
    });

    it('calculates the population standard deviation of an array of numbers', function() {
        var data    = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            result  = TQ.math.Statistic.standardDeviation(data);
        expect(result).toBeCloseTo(2.87228, 5);
    });

    it('calculates the coefficient of variation of an array of numbers', function() {
        var data    = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            result  = TQ.math.Statistic.coefficientOfVariation(data);
        expect(result).toBeCloseTo(0.638285, 6);
    });

    it('calculates the minimum value of an array of numbers', function() {
        var data    = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            result  = TQ.math.Statistic.min(data);
        expect(result).toBeCloseTo(0, 0);
    });

    it('calculates the maximum value of an array of numbers', function() {
        var data    = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            result  = TQ.math.Statistic.max(data);
        expect(result).toBeCloseTo(9, 0);
    });

    it('calculates the median value of an array of numbers', function() {
        var data    = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            result  = TQ.math.Statistic.median(data);
        expect(result).toBeCloseTo(4.5, 1);
    });

    it('calculates the 75% quantile of an array of numbers', function() {
        var data    = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            result  = TQ.math.Statistic.quantile(75, data);
        expect(result).toBeCloseTo(7, 0);
    });

});