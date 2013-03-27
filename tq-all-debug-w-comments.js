/**
 * A collection of useful static methods to deal with strings.
 *
 * Example:
 *      @example
 *      Ext.DomHelper.append(document.body, '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>');
 *      TQ.String.highlight(document.body, 'ipsum', 'error');
 */
Ext.define('TQ.String', {
    statics: {
        /**
         * Marks all occurrences of *search* on the dom node *node* with the CSS class *cls*.
         * @param   {HTMLElement}   node                            The dom node.
         * @param   {String}        search                          The string to mark
         * @param   {String}        [cls="tq-search-highlight"]     The CSS class to add to the marker span
         * @returns {Number}
         */
		highlight: function(node, search, cls) {
			search  = search.toUpperCase();

			var skip	= 0;
			if (node.nodeType == 3) {
				var pos = node.data.toUpperCase().indexOf(search);
				if (pos >= 0) {
					var spannode	= document.createElement('span'),
					    middlebit	= node.splitText(pos),
					    middleclone	= middlebit.cloneNode(true);

					spannode.className	= cls || 'tq-search-highlight';
					spannode.appendChild(middleclone);
					middlebit.parentNode.replaceChild(spannode, middlebit);
					skip = 1;
				}
			} else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
				for (var i = 0; i < node.childNodes.length; ++i) {
					i += this.highlight(node.childNodes[i], search, cls);
				}
			}
			return skip;
		}
	}
});
/**
 * Url-Button
 *
 * This simple button extension takes an {@link #url} parameter
 * and redirects the user to this url on clicking the button.
 *
 * Example:
 *      @example
 *      Ext.create('TQ.button.Url', {
 *          text: 'Take me to Google, please!',
 *          url: 'http://www.google.com',
 *          renderTo: document.body
 *      });
 *
 */
Ext.define('TQ.button.Url', {
	extend:  Ext.button.Button ,
	alias: 'widget.tq-urlbutton',

    /**
     * @cfg {String} url
     * The URL to which the user will be redirected.
     */
	url: null,

    /**
     * Handles the button click.
     * @param   {TQ.button.Url}     b   This button.
     * @param   {Ext.EventObject}   e   The click event.
     * @protected
     */
	handler: function(b, e) {
		if(b.url) {
			window.location.href = b.url;
		}
	}
});
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
         * Calculates the [variance][1] of the passed data array.
         *
         * [1]: http://en.wikipedia.org/wiki/Variance
         *
         * @param   {Number[]}  data    The data.
         * @returns {Number}            The variance.
         */
		variance: function(data) {
			data	= Ext.Array.from(data);
			var avg = TQ.math.Statistic.average(data),
				i	= data.length,
				v	= 0;
			while ( i-- ) {
				v += Math.pow( (data[ i ] - avg), 2 );
			}
			return (v / data.length );
		},

        /**
         * Calculates the [standard deviation][1] of the passed data array.
         *
         * [1]: http://en.wikipedia.org/wiki/Standard_deviation
         *
         * @param   {Number[]}  data    The data.
         * @returns {Number}            The standard deviation.
         */
		standardDeviation: function(data) {
			data		= Ext.Array.from(data);
			return Math.sqrt(TQ.math.Statistic.variance(data))
		},

        /**
         * Calculates the [coefficient of variation][1] of the passed data array.
         *
         * [1]: http://en.wikipedia.org/wiki/Coefficient_of_variation
         *
         * @param   {Number[]}  data    The data.
         * @returns {Number}            The coefficient of variation.
         */
		coefficientOfVariation: function(data) {
			data		= Ext.Array.from(data);
			var stdDev	= Math.sqrt( TQ.math.Statistic.variance(data) ),
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
         * [1]: http://en.wikipedia.org/wiki/Quantile
         *
         * @param   {Number}    q       The quantile rank.
         * @param   {Number[]}  data    The data.
         * @returns {Number}            The *q* quantile.
         */
		quantile: function(q, data) {
			data		= Ext.Array.from(data);
			var count	= data.length;

			if (count == 0 || q <= 0) {
				return null;
			} else if (count == 1) {
				return data[0];
			}

			data.sort(function(a, b) { return a - b });

			var qVal	= count * (q / 100);
			return data[Math.round(qVal) - 1];
		}
	}
});
/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-03-11 22:33:40 (aed16176e68b5e8aa1433452b12805c0ad913836)
*/
//
// Definitions of enums referenced in documentation.
//

/**
 * @enum [Ext.enums.Layout=layout.*]
 * Enumeration of all layout types.
 */

/**
 * @enum [Ext.enums.Widget=widget.*]
 * Enumeration of all xtypes.
 */

/**
 * @enum [Ext.enums.Plugin=plugin.*]
 * Enumeration of all ptypes.
 */

/**
 * @enum [Ext.enums.Feature=feature.*]
 * Enumeration of all ftypes.
 */


