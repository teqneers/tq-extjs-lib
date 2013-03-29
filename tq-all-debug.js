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
        
		highlight: function(node, search, cls) {
			search  = search.toUpperCase();

			var skip	= 0;
			if (node.nodeType == 3) {
				var pos = node.data.toUpperCase().indexOf(search);
				if (pos >= 0) {
					var spannode	= document.createElement('span'),
					    middlebit	= node.splitText(pos),
                        endbit	    = middlebit.splitText(search.length)
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


Ext.define('TQ.button.Url', {
	extend:  Ext.button.Button ,
	alias: 'widget.tq-urlbutton',

    
	url: null,

    
	handler: function(b, e) {
		if(b.url) {
			window.location.href = b.url;
		}
	}
});


Ext.define('TQ.math.Statistic', {
    statics: {

        
		average: function(data) {
			data	= Ext.Array.from(data);
			var sum	= TQ.math.Statistic.sum(data);
			return (sum / data.length );
		},

        
		sum: function(data) {
			data	= Ext.Array.from(data);
			var i	= data.length,
				sum	= 0;
			while ( i-- ) {
				sum += data[ i ];
			}
			return sum;
		},

        
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

        
		standardDeviation: function(data) {
			data		= Ext.Array.from(data);
			return Math.sqrt(TQ.math.Statistic.variance(data))
		},

        
		coefficientOfVariation: function(data) {
			data		= Ext.Array.from(data);
			var stdDev	= Math.sqrt( TQ.math.Statistic.variance(data) ),
				mean	= TQ.math.Statistic.average(data);
			return stdDev / mean;
		},

        
		min: function(data) {
			return Math.min.apply( Math, data );
		},

        
		max: function(data) {
			return Math.max.apply( Math, data );
		},

        
		median: function(data) {
			data	= Ext.Array.from(data);

			data.sort(function(a, b) { return a - b });
			var count		= data.length,
				middleVal	= Math.floor((count - 1) / 2), 
				median;

			if (count === 0) {
				return null;
			}

			if (count % 2) { 
				median = data[middleVal];
			} else { 
				var low 	= data[middleVal],
					high	= data[middleVal + 1];
				median		= ((low + high) / 2);
			}
			return median;
		},

        
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
