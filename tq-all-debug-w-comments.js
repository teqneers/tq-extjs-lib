/**
 * A collection of useful static methods to deal with strings.
 *
 * Example:
 *      @example
 *      Ext.DomHelper.append(document.body, '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>');
 *      TQ.String.highlight(document.body, 'ipsum');
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
 * This file contains Javascript code to provide
 * TEQneers specific ExtJs enhancements
 *
 * @author		Stefan Gehrig <gehrig@teqneers.de>
 * @copyright	2009/10 TEQneers GmbH & Co. KG
 * @package		TEQframework
 * @subpackage	javascript
 * @version		$Revision: 29529 $
 * @internal	$Id: Checkbox.js 29529 2013-03-14 09:01:27Z stefan $
 */
Ext.define('TQ.grid.column.Checkbox', {
	extend:  Ext.grid.column.Column ,
	alias: 'widget.tq-checkboxcolumn',

	align: 'center',

	checkboxType: 'check',

	checkedSymbol: 'x',
	uncheckedSymbol: '-',

	editable: true,

	nullIsFalse: false,

	undefinedText: '',
	nullText: '',
	doNotShowText: '',

	initComponent: function() {
		var me	= this;

		var renderer	= me.renderer || function(v) {
			return v;
		};

		me.renderer	= function(value, meta, record, rowIndex, colIndex, store, view) {
			value	= me.getColumnValue(value, record);
			if (value === undefined) {
                return me.undefinedText;
            } else if (value === null && !me.nullIsFalse) {
				return me.nullText;
			} else if (!me.showCheckbox(value, record)) {
				return me.doNotShowText;
			} else {
				if (!me.canEditRecord(record)) {
					return renderer("<div class=\"tq-checkboxcolumn-text\">"+me.getCheckboxSymbol(value, record, colIndex)+"</div>", meta, record, rowIndex, colIndex, store, view);
				} else {
					return renderer("<div class=\"tq-checkboxcolumn "+me.getCheckboxCls(value, record, colIndex)+"\"></div>", meta, record, rowIndex, colIndex, store, view);
				}
			}
		};

		me.callParent(arguments);

		this.addEvents('beforecheckchange', 'checkchange');
	},

	getColumnValue: function(value, record) {
		return value;
	},

	showCheckbox: function(value, record) {
		return true;
	},

	canEditRecord: function(record) {
		return this.editable;
	},

	processEvent: function(type, view, cell, recordIndex, cellIndex, e) {
        if (e.getTarget('.tq-checkboxcolumn') && type == 'click') {
			var record = view.getStore().getAt(recordIndex);
			if (this.canEditRecord(record)) {
				this.onCheckboxClick(record, e, this);
				return false;
			}
		}
		return this.callParent(arguments);
    },

	getCheckboxCls: function(value, record, colIndex) {
		return "tq-grid-"+this.checkboxType+"-col"+(value?"-on":"");
	},

	getCheckboxSymbol: function(value, record, colIndex) {
		return (value) ? this.checkedSymbol : this.uncheckedSymbol;
	},

	onCheckboxClick: function(record, event, column) {
		var checked	= !record.get(column.dataIndex);
		if (this.fireEvent('beforecheckchange', this, checked, record) !== false) {
			this.setValueOnRecord(record, column.dataIndex, checked, column);
			this.fireEvent('checkchange', this, checked, record);
		}
	},

	setValueOnRecord: function(record, dataIndex, checked, column) {
		record.set(dataIndex, checked);
	}
});

/**
 * Grid column editable mixin
 *
 * This mixin makes creating editable grid columns a bit easier. Just add the mixin to your column type and provide
 * a {@link createEditor()} method that return the editor for the column.
 *
 * Only applicable if the grid is using an {@link Ext.grid.plugin.Editing Editing} plugin.
 *
 * Example usage:
 *
 *        Ext.define('My.grid.column.Special', {
 *	        extend: 'Ext.grid.column.Number',
 *          mixins: {
 *              editable: 'TQ.grid.column.Editable'
 *          },
 *
 *          editable: true,
 *
 *          createEditor: function() {
 *		        return {
 *			        xtype: 'numberfield',
 *			        decimalSeparator: ',',
 *			        decimalPrecision: 2,
 *			        minValue: -10,
 *			        maxValue: 10
 *		        };
 *	        }
 *	    });
 */
Ext.define('TQ.grid.column.Editable', {

    /**
     * @cfg {Boolean} editable
     * False to prevent creating the editor
     */
    editable: true,

    /**
     * Performs initialization of this mixin. Component classes using this mixin should call this method during their
     * own initialization.
     */
	initEditableColumn: function() {
		if (   this.isXType('gridcolumn')
            && this.editable
        ) {
            var editor  = this.createEditor();
            if (editor) {
                this.editor	= editor;
            }
		}
	},

    /**
     * Returns the xtype or config object for a {@link Ext.form.field.Field Field} or a fully instantiated
     * {@link Ext.grid.CellEditor} to use for editing.
     *
     * @returns {Object/String/Null}
     */
    createEditor: function() {
        return null;
    }
});

/**
 * This file contains Javascript code to provide
 * TEQneers specific ExtJs enhancements
 *
 * @author		Timo Buhmann <buhmann@teqneers.de>
 * @copyright	2011/12 TEQneers GmbH & Co. KG
 * @package		TEQframework
 * @subpackage	javascript
 * @version		$Revision: 26090 $
 * @internal	$Id: Numeric.js 26090 2012-07-13 08:43:56Z stephan $
 */
Ext.define('TQ.grid.column.Numeric', {
	extend:  Ext.grid.column.Number ,
	mixins: {
        editable:  TQ.grid.column.Editable 
    },
	alias:	'widget.tq-grid-column-numeric',

	// smart formatting
	smartFormatting: true,

	// regular formatting
	maxPrecision: 12,
	stripTrailingZeros: true,
	withThousands: true,

	stringWhenNull: '',

	align: 'right',

	factor: 1,
	invertValue: false,

	renderPrefix: null,
	renderPrefixCallback: null,
	renderSuffix: null,
	renderSuffixCallback: null,

	// editor attributes
	allowBlank: false,
	minValue: null,
	editorConfig: null,

	numberRenderer: null,

	constructor: function(cfg) {
		var me = this;
		me.callParent(arguments);

		if (Ext.isFunction(me.numberRenderer)) {
			me.numberRenderer	= me.numberRenderer;
		} else if ( me.smartFormatting ) {
			me.numberRenderer	= TQ.util.Format.smartNumberRenderer();
		} else {
			me.numberRenderer = TQ.util.Format.numberRenderer(me.maxPrecision, me.withThousands, me.stripTrailingZeros, me.maxPrecision);
		}

		var cellRenderer	= cfg.renderer;
		if (!Ext.isFunction(cellRenderer)) {
			cellRenderer	= function(value) {
				return value;
			};
		} else {
			delete cfg.renderer;
		}

		me.renderer	= function(value, metaData, record, rowIndex, colIndex, store, view) {
			value	= me.getNumericValue(value, record);
			me.applyCellFormatting(value, metaData, record);
			if (!Ext.isEmpty(value)) {
				if ( me.invertValue ) {
					value *= -1;
				}

				value	= value/me.factor;
				value	= me.numberRenderer(value);

				if (me.renderPrefix) {
					value	= me.renderPrefix + value;
				} else if (Ext.isFunction(me.renderPrefixCallback)) {
					value	= me.renderPrefixCallback.call(me, value, record) + value;
				}

				if (me.renderSuffix) {
					value	= value + me.renderSuffix;
				} else if (Ext.isFunction(me.renderSuffixCallback)) {
					value	= value + me.renderSuffixCallback.call(me, value, record);
				}

				return cellRenderer.call(me, value, metaData, record, rowIndex, colIndex, store, view);
			} else {
				return cellRenderer.call(me, me.stringWhenNull, metaData, record, rowIndex, colIndex, store, view);
			}
		}
	},

	initComponent: function() {
		var me = this;
		me.initEditableColumn();
		me.callParent(arguments);

		if (this.editable) {
			this.on({
				beforeedit: function(column, editingContext) {
					if (this.factor !== 1) {
						editingContext.value	= editingContext.value / this.factor;
					}
				},
				afteredit: function(column, editingContext) {
					if (this.factor !== 1) {
						editingContext.value	= editingContext.value * this.factor;
					}
				},
				scope: this
			});
		}
	},

	getNumericValue: function(v, r) {
		return v;
	},

	applyCellFormatting: function(v, m, r) {

	},

	createEditor: function() {
		var me = this;
		return Ext.apply({}, {
			xtype: 'tq-numberfield',
			align: me.align,
			allowBlank: me.allowBlank,
			decimalSeparator: TQ_DECIMAL_POINT,
			decimalPrecision: me.maxPrecision,
			minValue: me.minValue,
			cls: 'tq-number-editor'
		}, me.editorConfig || {});
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
/**
 * @class TQ.util.Format
 *
 * This class is a centralized place for formatting numeric values.
 *
 * ## Localization
 *
 * This class contains several options for localization. These can be set once the library has loaded,
 * all calls to the functions from that point will use the locale settings that were specified.
 *
 * Options include:
 *
 * - thousandSeparator
 * - decimalSeparator
 *
 * ## Default settings
 *
 * Default settings can be set on the singleton as a fallback if the parameters are omitted
 * on function calls.
 *
 * Settings include:
 *
 * - precision
 * - showThousandSeparator
 * - stripTrailingZeroes
 *
 * ## Using with renderers
 *
 * There is a helper function that returns a new function that can be used in conjunction with
 * grid renderers:
 *
 *     columns: [{
 *         dataIndex: 'value',
 *         renderer: TQ.util.Format.numberRenderer(3, true, false)
 *     }]
 *
 * @singleton
 */
(function() {
    Ext.ns('TQ.util');

    TQ.util.Format = {};
    var UtilFormat  = TQ.util.Format,
        ExtFormat   = Ext.util.Format;

    Ext.apply(UtilFormat, {

        /**
         * @property {String} thousandSeparator
         * The character that the {@link #number} function uses as a thousand separator.
         */
        thousandSeparator: ExtFormat.thousandSeparator,

        /**
         * @property {String} decimalSeparator
         * The character that the {@link #number} function uses as a decimal point.
         */
        decimalSeparator: ExtFormat.decimalSeparator,

        /**
         * @property {Number} precision
         * The default precision if precision is omitted.
         */
        precision: 2,

        /**
         * @property {Boolean} showThousandSeparator
         * The default setting whether the thousand separator should be displayed.
         */
        showThousandSeparator: true,

         /**
         * @property {Boolean} stripTrailingZeroes
         * The default setting whether trailing zeroes are to be stripped.
         */
        stripTrailingZeroes: true,

        /**
         * Returns a format string to be used by `Ext.util.Format.number()`.
         *
         * @param   {Number}    precision               The precision to display floating point numbers - defaults to {@link #precision}.
         * @param   {Boolean}   showThousandSeparator   True to show the thousand separator - defaults to {@link #showThousandSeparator}.
         * @returns {String}                            The format string.
         */
        numberFormatString: function(precision, showThousandSeparator) {

			if (Ext.isEmpty(precision))	{
				precision	= UtilFormat.precision;
			}
			if (Ext.isEmpty(showThousandSeparator))	{
				showThousandSeparator	= UtilFormat.showThousandSeparator;
			}

			var format = '0';
			if ( showThousandSeparator ) {
				format += UtilFormat.thousandSeparator+'000';
			}
            if (precision > 0) {
			    format	+= UtilFormat.decimalSeparator+''+Ext.String.repeat('0', precision);
            }
			if ( UtilFormat.decimalSeparator != '.' ) {
				format	+= '/i';
			}
			return format;
		},

        /**
         * Formats the passed number according to the passed parameters.
         *
         * @param   {Number}    v                       The number to format.
         * @param   {Number}    precision               The precision to display floating point numbers - defaults to {@link #precision}.
         * @param   {Boolean}   showThousandSeparator   True to show the thousand separator - defaults to {@link #showThousandSeparator}.
         * @param   {Boolean}   stripTrailingZeroes     True to strip trailing zeroes - defaults to {@link #stripTrailingZeroes}.
         * @return  {String}    The formatted number.
         */
        number: function(v, precision, showThousandSeparator, stripTrailingZeroes) {
			if (Ext.isEmpty(stripTrailingZeroes))	{
				stripTrailingZeroes	= UtilFormat.stripTrailingZeroes;
			}

            var format      = UtilFormat.numberFormatString(precision, showThousandSeparator),
                formatted   = ExtFormat.number(v, format);

			if ( stripTrailingZeroes ) {
                var	vStr    = String( v );

                // Convert exponential to fixed number
                if ( vStr.indexOf( 'e' ) !== -1 ) {
                    vStr = String( Number( vStr ).toFixed() );
                }

                var list    = vStr.split( '.', 2 );
                if ( list.length > 1 ) {
                    var previsionLength	= list[ 1 ].length;

                    // 5615462.6 will be converted wrongly to 5,615,462.5999999996 and shown as 5,615,462.5
                    // by Ext.util.Format.number, we have to correct this error.
                    var valueLastDigit  = vStr.charAt( vStr.length - 1 );

                    if ( previsionLength < precision ) {
                        // Cut last digit and all zeros, e.g. 1,500001 to 1,5
                        formatted = formatted.replace( new RegExp('\\d{' + ( precision - previsionLength ) + '}$' ), '' );
                        var formattedLastDigit = formatted.charAt( formatted.length - 1 );
                        if ( parseInt( formattedLastDigit, 10 ) != valueLastDigit ) {
                            // Correct rounding error (in our example convert .5 to .6)
                            // E.g. 5,615,462.5999999996 to 5,615,462.6
                            formatted = formatted.replace( /\d$/, valueLastDigit );
                        }
                    }

					formatted	= formatted.replace(
						new RegExp(
							 '((()'
                            +Ext.String.escapeRegex(UtilFormat.decimalSeparator)
                            +'0*)|('
                            +Ext.String.escapeRegex(UtilFormat.decimalSeparator)
                            +'[0-9]+?)(0*))$'
						),
						'$4'
					);
				}
			}
            return formatted;
		},

        /**
         * Returns a number rendering function that can be reused to apply a number format multiple
         * times efficiently.
         *
         * @param   {Number}    precision               The precision to display floating point numbers - defaults to {@link #precision}.
         * @param   {Boolean}   showThousandSeparator   True to show the thousand separator - defaults to {@link #showThousandSeparator}.
         * @param   {Boolean}   stripTrailingZeroes     True to strip trailing zeroes - defaults to {@link #stripTrailingZeroes}.
         * @return  {Function}                          The number formatting function
         */
        numberRenderer : function(precision, showThousandSeparator, stripTrailingZeroes) {
            return function(v) {
                return UtilFormat.number(v, precision, showThousandSeparator, stripTrailingZeroes);
            };
        },

        smartNumberRenderer: function(config) {
			var formatter = new TQ.util.SmartFormat(config);
			return formatter.numberRenderer();
		},

		smartNumber: function(v, config) {
			var formatter = new TQ.util.SmartFormat(config);
			return formatter.number(v);
		}

    });
}());
/**
 * @class TQ.util.SmartFormat
 *
 * This class contains methods for smart formatting numeric values.
 *
 * ## Default settings
 *
 * Default settings can be set on the singleton.
 *
 * Settings include:
 *
 * - showThousandSeparator
 * - stripTrailingZeroes
 *
 * ## Using with renderers
 *
 * There is a helper function that returns a new function that can be used in conjunction with
 * grid renderers:
 *
 *     columns: [{
 *         dataIndex: 'value',
 *         renderer: TQ.util.SmartFormat.numberRenderer()
 *     }]
 *
 * @singleton
 */
(function() {
    Ext.ns('TQ.util');

    TQ.util.SmartFormat = {};
    var SmartFormat     = TQ.util.SmartFormat,
        UtilFormat      = TQ.util.Format,
        defaultStrategy = [{
            p: function(v, absV) {
                return absV >= 100;
            },
            f: function(value, showThousandSeparator, stripTrailingZeroes) {
                return UtilFormat.number(value, 0, showThousandSeparator, false);
            }
        }, {
            p: function(v, absV) {
                return absV >= 10;
            },
            f: function(value, showThousandSeparator, stripTrailingZeroes) {
                return UtilFormat.number(value, 1, showThousandSeparator, stripTrailingZeroes);
            }
        }, {
            p: function(v, absV) {
                return absV >= 1;
            },
            f: function(value, showThousandSeparator, stripTrailingZeroes) {
                return UtilFormat.number(value, 2, showThousandSeparator, stripTrailingZeroes);
            }
        }, {
            p: function(v, absV) {
                return absV == 0;
            },
            f: function(value, showThousandSeparator, stripTrailingZeroes) {
                return UtilFormat.number(value, 0, showThousandSeparator, false);
            }
        }, {
            p: function(v, absV) {
                return absV > Math.pow(10, -1 * 6);
            },
            f: function(value, showThousandSeparator, stripTrailingZeroes) {
                return UtilFormat.number(value, 6, showThousandSeparator, false);
            }
        }, {
            p: function(v, absV) {
                return true;
            },
            f: function(value, showThousandSeparator, stripTrailingZeroes) {
                var exponent	= 0,
                    absV	    = Math.abs(value);
                if (absV > 0) {
                    exponent	= Math.floor(Math.log(absV) / Math.LN10);
                }

                if (exponent === 0) {
                    return UtilFormat.number(value, 6, showThousandSeparator, stripTrailingZeroes);
                }

                var mantissa	= SmartFormat.number(value / Math.pow(10, exponent));
                return mantissa + 'e' + exponent;
            }
        }];

    Ext.apply(SmartFormat, {

        /**
         * @property {Boolean} showThousandSeparator
         * The default setting whether the thousand separator should be displayed.
         */
        showThousandSeparator: true,

         /**
         * @property {Boolean} stripTrailingZeroes
         * The default setting whether trailing zeroes are to be stripped.
         */
        stripTrailingZeroes: true,

        /**
         * Smartly formats the passed number according to the passed parameters.
         *
         * @param   {Number}    v           The number to format.
         * @param   {Array}     strategy    The precision to display floating point numbers - defaults to {@link #precision}.
         * @return  {String}                The formatted number.
         */
        number: function(v, strategy) {
            if (!Ext.isEmpty(v) && Ext.isNumber(v)) {
                strategy    = strategy || defaultStrategy;
                var absV	= Math.abs(v),
                    len     = strategy.length,
                    i;
                for (i = 0; i < len; i++) {
                    if (strategy[i].p(v, absV)) {
                        return strategy[i].f(v, SmartFormat.showThousandSeparator, SmartFormat.stripTrailingZeroes);
                    }
                }
            }
            return '';
        },

        /**
         * Returns a number rendering function that can be reused to apply the smart number format multiple
         * times efficiently.
         *
         * @param   {Array}    strategy     The precision to display floating point numbers - defaults to {@link #precision}.
         * @return  {Function}               The number formatting function
         */
        numberRenderer: function(strategy) {
            return function(v) {
                return SmartFormat.number(v, strategy);
            };
        }

    });
}());
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


