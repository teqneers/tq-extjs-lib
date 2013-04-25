/**
 * A collection of useful static methods to deal with statistics problems.
 *
 * Example:
 *      @example
 *      var data    = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
 *          stats   = [
 *              TQ.math.Statistic.average(data),
 *              TQ.math.Statistic.sum(data),
 *              TQ.math.Statistic.variance(data),
 *              TQ.math.Statistic.standardDeviation(data),
 *              TQ.math.Statistic.coefficientOfVariation(data),
 *              TQ.math.Statistic.min(data),
 *              TQ.math.Statistic.max(data),
 *              TQ.math.Statistic.median(data),
 *              TQ.math.Statistic.quantile(75, data)
 *          ];
 *
 *      Ext.Array.each(stats, function(v) { Ext.DomHelper.append(document.body, '<p>'+v+'</p>'); });
 */
Ext.define('TQ.math.Statistic', {
    statics: {

        /**
         * Calculates the [arithmetic mean][1] of the passed data array.
         *
         * [1]: http://en.wikipedia.org/wiki/Arithmetic_mean
         *
         * @param   {Number[]}  data    The data.
         * @returns {Number}            The arithmetic mean.
         */
		average: function(data) {
			data	= Ext.Array.from(data);
			var sum	= TQ.math.Statistic.sum(data);
			return (sum / data.length );
		},

        /**
         * Calculates the [sum][1] of the passed data array.
         *
         * [1]: http://en.wikipedia.org/wiki/Sum
         *
         * @param   {Number[]}  data    The data.
         * @returns {Number}            The sum.
         */
		sum: function(data) {
			data	= Ext.Array.from(data);
			var i	= data.length,
				sum	= 0;
			while ( i-- ) {
				sum += data[ i ];
			}
			return sum;
		},

        /**
         * Calculates the population or sample [variance][1] of the passed data array.
         *
         * [1]: http://en.wikipedia.org/wiki/Variance
         *
         * @param   {Number[]}  data    The data.
         * @param   {Boolean}   sample  True to calculate the sample variance
         *                              instead of the population variance.
         * @returns {Number}            The variance.
         */
		variance: function(data, sample) {
			data    = Ext.Array.from(data);
			var avg = TQ.math.Statistic.average(data),
				i   = data.length,
                div = (sample) ? data.length - 1 : data.length,
				v   = 0;
			while ( i-- ) {
				v += Math.pow( (data[ i ] - avg), 2 );
			}
			return (v / div );
		},

        /**
         * Calculates the population or sample [standard deviation][1] of the passed data array.
         *
         * [1]: http://en.wikipedia.org/wiki/Standard_deviation
         *
         * @param   {Number[]}  data    The data.
         * @param   {Boolean}   sample  True to calculate the sample standard deviation
         *                              instead of the population standard deviation.
         * @returns {Number}            The standard deviation.
         */
		standardDeviation: function(data, sample) {
			data		= Ext.Array.from(data);
			return Math.sqrt(TQ.math.Statistic.variance(data, sample))
		},

        /**
         * Calculates the population or sample [coefficient of variation][1] of the passed data array.
         *
         * [1]: http://en.wikipedia.org/wiki/Coefficient_of_variation
         *
         * @param   {Number[]}  data    The data.
         * @param   {Boolean}   sample  True to calculate the sample coefficient of variation
         *                              instead of the population coefficient of variation.
         * @returns {Number}            The coefficient of variation.
         */
		coefficientOfVariation: function(data, sample) {
			data		= Ext.Array.from(data);
			var stdDev	= Math.sqrt( TQ.math.Statistic.variance(data, sample) ),
				mean	= TQ.math.Statistic.average(data);
			return stdDev / mean;
		},

        /**
         * Calculates the [minimum value][1] of the passed data array.
         *
         * [1]: http://en.wikipedia.org/wiki/Sample_maximum_and_minimum
         *
         * @param   {Number[]}  data    The data.
         * @returns {Number}            The minimum value.
         */
		min: function(data) {
			return Math.min.apply( Math, data );
		},

        /**
         * Calculates the [maximum value][1] of the passed data array.
         *
         * [1]: http://en.wikipedia.org/wiki/Sample_maximum_and_minimum
         *
         * @param   {Number[]}  data    The data.
         * @returns {Number}            The maximum value.
         */
		max: function(data) {
			return Math.max.apply( Math, data );
		},

        /**
         * Calculates the [median value][1] of the passed data array.
         *
         * [1]: http://en.wikipedia.org/wiki/Median
         *
         * @param   {Number[]}  data    The data.
         * @returns {Number}            The median value.
         */
		median: function(data) {
			data	= Ext.Array.from(data);

			data.sort(function(a, b) { return a - b });
			var count		= data.length,
				middleVal	= Math.floor((count - 1) / 2), // find the middle value, or the lowest middle value
				median;

			if (count === 0) {
				return null;
			}

			if (count % 2) { // odd Number, middle is the median
				median = data[middleVal];
			} else { // even Number, calculate avg of 2 medians
				var low 	= data[middleVal],
					high	= data[middleVal + 1];
				median		= ((low + high) / 2);
			}
			return median;
		},

        /**
         * Calculates the *q* [quantile value][1] of the passed data array.
         *
         * The method uses the [SAS Method 5][2].
         *
         * [1]: http://en.wikipedia.org/wiki/Quantile
         * [2]: http://www.haiweb.org/medicineprices/manual/quartiles_iTSS.pdf
         *
         * @param   {Number}    p       The quantile rank
         *                              (either as decimal 0.0 < p <= 1.0 or as percentage 1 < p <= 100).
         * @param   {Number[]}  data    The data.
         * @returns {Number}            The *q* quantile.
         */
		quantile: function(p, data) {
			data	= Ext.Array.from(data);
			p		= (p > 1) ? p/100 : p;
			var n	= data.length,
				jg, j, g;

			if (n == 0 || p <= 0) {
				return null;
			}

			data.sort(function(a, b) { return a - b });
			jg	= n*p;
			j	= Math.floor(jg);
			g	= jg - j;

			if (g > 0) {
				return data[j+1];
			} else {
				return (data[j-1] + data[j]) / 2;
			}
		}
	}
});