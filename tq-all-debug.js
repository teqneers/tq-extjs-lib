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


Ext.define('TQ.grid.column.Editable', {

    
    editable: true,

    
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

    
    createEditor: function() {
        return null;
    }
});


Ext.define('TQ.grid.column.Numeric', {
	extend:  Ext.grid.column.Number ,
	mixins: {
        editable:  TQ.grid.column.Editable 
    },
	alias:	'widget.tq-grid-column-numeric',

	
	smartFormatting: true,

	
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

        
		standardDeviation: function(data, sample) {
			data		= Ext.Array.from(data);
			return Math.sqrt(TQ.math.Statistic.variance(data, sample))
		},

        
		coefficientOfVariation: function(data, sample) {
			data		= Ext.Array.from(data);
			var stdDev	= Math.sqrt( TQ.math.Statistic.variance(data, sample) ),
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


(function() {
    Ext.ns('TQ.util');

    TQ.util.Format = {};
    var UtilFormat  = TQ.util.Format,
        ExtFormat   = Ext.util.Format;

    Ext.apply(UtilFormat, {

        
        thousandSeparator: ExtFormat.thousandSeparator,

        
        decimalSeparator: ExtFormat.decimalSeparator,

        
        precision: 2,

        
        showThousandSeparator: true,

         
        stripTrailingZeroes: true,

        
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

        
        number: function(v, precision, showThousandSeparator, stripTrailingZeroes) {
			if (Ext.isEmpty(stripTrailingZeroes))	{
				stripTrailingZeroes	= UtilFormat.stripTrailingZeroes;
			}

            var format      = UtilFormat.numberFormatString(precision, showThousandSeparator),
                formatted   = ExtFormat.number(v, format);

			if ( stripTrailingZeroes ) {
                var	vStr    = String( v );

                
                if ( vStr.indexOf( 'e' ) !== -1 ) {
                    vStr = String( Number( vStr ).toFixed() );
                }

                var list    = vStr.split( '.', 2 );
                if ( list.length > 1 ) {
                    var previsionLength	= list[ 1 ].length;

                    
                    
                    var valueLastDigit  = vStr.charAt( vStr.length - 1 );

                    if ( previsionLength < precision ) {
                        
                        formatted = formatted.replace( new RegExp('\\d{' + ( precision - previsionLength ) + '}$' ), '' );
                        var formattedLastDigit = formatted.charAt( formatted.length - 1 );
                        if ( parseInt( formattedLastDigit, 10 ) != valueLastDigit ) {
                            
                            
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

        
        showThousandSeparator: true,

         
        stripTrailingZeroes: true,

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

        numberRenderer: function(strategy) {
            return function(v) {
                return SmartFormat.number(v, strategy);
            };
        }

    });
}());
